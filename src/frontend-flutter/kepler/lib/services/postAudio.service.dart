import '../models/audioProcess.model.dart';
import '../utils/Convert.util.dart';
import 'package:flutter_dotenv/flutter_dotenv.dart';
import 'package:http/http.dart' as http;
import 'package:http_parser/http_parser.dart';
import 'dart:convert';
import 'dart:io';
import 'dart:typed_data';
import 'package:path_provider/path_provider.dart';

Future<List<String>> postAudio(String audioFilePath) async {
  String? apiUrl = 'http://10.0.2.2:3000';
  const String path = 'upload';
  String flacFilePath = await convert(audioFilePath, 'm4a', 'flac'); // Assumindo que a função convert está definida em outro lugar
  print(flacFilePath);
  if (apiUrl == null) {
    throw Exception("API_URL not found");
  }

  var request = http.MultipartRequest("POST", Uri.parse("$apiUrl/$path"));
  request.fields["contentType"] = "audio/x-flac"; 
  request.files.add(
    await http.MultipartFile.fromPath('file', flacFilePath,
        contentType: MediaType('audio', 'x-flac')),
  );

  var response = await http.Response.fromStream(await request.send());

  if (response.statusCode == 201 || response.statusCode == 200) {
    // Se a chamada à API foi bem-sucedida, analise a resposta JSON.
    return List<String>.from(json.decode(response.body));
  } else {
    // Se a chamada à API não foi bem-sucedida, lance uma exceção.
    throw Exception('Failed to upload audio');
  }
}


