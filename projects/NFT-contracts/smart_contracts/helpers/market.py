


from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


@app.route('/api/upload', methods=['POST'])
def upload_file():
    if 'image' not in request.files:
        return 'No file part', 400

    file = request.files['image']
    
    # Get the filename
    filename = file.filename
    
    # Validate and process the file as necessary (e.g., save to disk, resize, etc.)

    # For demonstration, let's base64 encode the image data
    image_data = file.read()
    encoded_image = base64.b64encode(image_data).decode('utf-8')

    # Here you can implement your logic for minting the NFT
    # For example, you could save the image data to a database or a file system

    # Once the NFT is successfully minted, return a success response
    return jsonify({'message': 'NFT minted successfully', 'filename': filename}), 200
