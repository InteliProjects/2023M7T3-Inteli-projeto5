import 'dart:convert';
import 'package:flutter_dotenv/flutter_dotenv.dart';
import 'package:http/http.dart' as http;
import 'package:http_parser/http_parser.dart';
import 'package:path_provider/path_provider.dart';

Future<List<String>> postText(String question) async {
  String? apiUrl = 'http://10.0.2.2:3000/upload/text';
  // const String path = 'nlu';
  if (apiUrl == null) {
    throw Exception("API_URL not found");
  }
  // var headers = {'Content-Type': 'audio/x-flac'};
 final headers = {
    'Content-Type': 'application/json',
  };

  final body = json.encode({
    'text': question,
  });

  final response = await http.post(
    Uri.parse(apiUrl),
    headers: headers,
    body: body,
  );

  if (response.statusCode == 201 || response.statusCode == 200) {
    // Se a chamada à API foi bem-sucedida, analise a resposta JSON.
    return List<String>.from(json.decode(response.body));
  } else {
    // Se a chamada à API não foi bem-sucedida, lance uma exceção.
    throw Exception('Failed to upload audio');
  }
}
