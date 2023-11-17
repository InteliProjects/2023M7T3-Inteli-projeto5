class AudioProcessingResult {
  final String? tempFilePath;
  final String message;
  final int statusCode;

  AudioProcessingResult({
    this.tempFilePath,
    required this.message,
    required this.statusCode,
  });
}
