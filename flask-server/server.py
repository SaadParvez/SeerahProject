from flask import Flask, request, jsonify
from flask_cors import CORS
from ChatBot import get_response

app = Flask(__name__)
CORS(app)

@app.route("/chatbot", methods=['POST'])
def chatbot_response():
    try:
        data_received = request.get_json()
        user_input = data_received.get('question')

        response = get_response(user_input)
        result = response.get('result')
        return jsonify({"result": result})
    
    except Exception as e:
        print(e)
        return jsonify({"message": "Internal Server Error"}), 500


if __name__== "__main__":
    app.run(debug=True)


