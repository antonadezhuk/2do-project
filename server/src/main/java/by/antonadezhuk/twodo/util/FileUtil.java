package by.antonadezhuk.twodo.util;

import org.springframework.web.multipart.MultipartFile;

import java.util.Optional;
import java.util.UUID;

public class FileUtil {

    public static Optional<String> retrieveFilenameExtension(String filename) {
        return Optional.ofNullable(filename)
                .filter(fn -> fn.contains("."))
                .map(fn -> fn.substring(fn.lastIndexOf(".") + 1));
    }

    public static Optional<String> generateUniqueFilename(MultipartFile file) {
        return Optional.ofNullable(file)
                .filter(f -> !f.isEmpty())
                .flatMap(f -> retrieveFilenameExtension(f.getOriginalFilename()))
                .map(ext -> UUID.randomUUID() + "." + ext);
    }
}
