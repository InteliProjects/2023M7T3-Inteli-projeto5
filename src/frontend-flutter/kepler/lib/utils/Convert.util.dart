import 'package:flutter_ffmpeg/flutter_ffmpeg.dart';

final FlutterFFmpeg flutterFFmpeg = FlutterFFmpeg();

Future<String> convert(
    String inputFilePath, String inputFileExtension, String targetFileExtension) async {

  final String outputFilePath =
      inputFilePath.replaceAll('.$inputFileExtension', '.$targetFileExtension');

  final String command = "-i $inputFilePath -c:a flac $outputFilePath";

  int resultCode = await flutterFFmpeg.execute(command);

  // It's usually a good idea to call cancel() in a finally block or some error handling mechanism.
  // This ensures the operation is cancelled even if an error occurs.
  // flutterFFmpeg.cancel();

  if (resultCode == 0) {
    return outputFilePath;
  } else {


    return "Error: ";
  }
}


