from langchain_community.document_loaders.csv_loader import CSVLoader
from langchain.text_splitter import RecursiveCharacterTextSplitter

from langchain_community.vectorstores import Chroma

from langchain_community.vectorstores import FAISS
from langchain.chains.question_answering import load_qa_chain
from langchain_community.embeddings import HuggingFaceInstructEmbeddings
from langchain_google_genai import (ChatGoogleGenerativeAI,
                                    HarmBlockThreshold,
                                    HarmCategory,)

import json


GOOGLE_API_KEY="AIzaSyBMMtvjGIGr2Uj_HptA3DsUMgQylf2Uc3c"
llm = ChatGoogleGenerativeAI(model="gemini-pro", google_api_key=GOOGLE_API_KEY, safety_settings={
    HarmCategory.HARM_CATEGORY_HATE_SPEECH: HarmBlockThreshold.BLOCK_NONE,
})

VectorStore_file_path = "faiss_index"

embeddings_model_name = "hkunlp/instructor-xl"
embeddings = HuggingFaceInstructEmbeddings(model_name=embeddings_model_name, model_kwargs={"device":"cpu"})

def create_vector_db():
    import csv
    from langchain.docstore.document import Document
    from langchain.text_splitter import CharacterTextSplitter

    columns_to_embed = ["HIJRAH","Hijri Month", "Julian Month","Year", "Birth Year", "Event Summary", "Event Description"]
    columns_to_metadata = ["Days"]

    docs=[]
  
  


  
    with open('LLM Dataset - Sheet1.csv', newline="", encoding='utf-8-sig') as csvfile:
        csv_reader = csv.DictReader(csvfile)
        for i, row in enumerate(csv_reader):
            to_metadata = {col: row[col] for col in columns_to_metadata if col in row}
            values_to_embed = {k: row[k] for k in columns_to_embed if k in row}
            to_embed = "\n".join(f"{k.strip()}: {v.strip()}" for k, v in values_to_embed.items())
            newDoc = Document(page_content=to_embed, metadata=to_metadata)
            docs.append(newDoc)

    splitter = CharacterTextSplitter(
        separator="\n",
        chunk_size=1250,
        chunk_overlap=0,
        length_function=len
    )

    documents = splitter.split_documents(docs)

    VectorStore = FAISS.from_documents(documents, embedding=embeddings)
    VectorStore.save_local(VectorStore_file_path)




from langchain.retrievers.self_query.base import SelfQueryRetriever
from langchain.chains.query_constructor.base import AttributeInfo
VectorStore = FAISS.load_local(VectorStore_file_path, embeddings)

metadata_field_info = [
    AttributeInfo(
        name="HIJRAH",
        description="Years of Hijrah",
        type="string"
    ),
    AttributeInfo(
        name="Hijri Month",
        description="Months of the Hijri Calendar",
        type="string"
    ),
    AttributeInfo(
        name="Days",
        description="Days of the month. Ex. Monday",
        type="string"
    ),
    AttributeInfo(
        name="Julian Month",
        description="Months of the Julian Calendar and the dates. Ex. Apr 12",
        type="string"
    ),
    AttributeInfo(
        name="Year",
        description="Year according to the Julian calendar",
        type="string"
    ),
    AttributeInfo(
        name="Birth Year",
        description="Years since the birth of the Prophet",
        type="string"
    ),
    AttributeInfo(
        name="Event Summary",
        description="A summary of the event that took place on a specific date",
        type="string"
    ),
    AttributeInfo(
        name="Event Description",
        description="Description of the event that took place on a specific date",
        type="string"
    )
]

document_content_description = "Seerah Events"

retriever = VectorStore.as_retriever(score_threshold=0.7)

from langchain.prompts import PromptTemplate

prompt_template="""Given the following context and question, generate an answer based on the source document.Please do not try to make up an answer.

CONTEXT: {context}

QUESTION:{question}"""

PROMPT = PromptTemplate(
    template=prompt_template, input_variables=["context", "question"]
)
# retriever = SelfQueryRetriever.from_llm(
#     llm, VectorStore, document_content_description, metadata_field_info, verbose=True)


from langchain.chains import RetrievalQA

chain = RetrievalQA.from_chain_type(llm=llm,
            chain_type="stuff",
            retriever=retriever,
            input_key="query",
            return_source_documents=True,
            chain_type_kwargs={"prompt": PROMPT})




def serialize_document(doc):
   return {
      'page_content': doc.page_content,
      'metadata': doc.metadata,
   }

def get_response(user_input):
    response = chain(user_input)

    return response

