package by.antonadezhuk.twodo.service.impl;

import by.antonadezhuk.twodo.exception.StorageException;
import by.antonadezhuk.twodo.service.FileStorageService;
import by.antonadezhuk.twodo.util.FileUtil;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.io.InputStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;

@Service
public class ImageStorageService implements FileStorageService {

    @Value("${spring.application.static-content-location}/images")
    private Path rootLocation;

    @Override
    @PostConstruct
    public void init() {
        try {
            Files.createDirectories(rootLocation);
        } catch (IOException e) {
            throw new StorageException(e.getMessage());
        }
    }

    @Override
    public String store(MultipartFile file) {
        if (file.isEmpty()) {
            throw new StorageException("Failed to store empty file!");
        }

        String filename = FileUtil.generateUniqueFilename(file)
                .orElseThrow(() -> new StorageException("Failed to generate a unique filename!"));

        Path destination = rootLocation.resolve(Paths.get(filename));
        Path absoluteDestination = destination.normalize().toAbsolutePath();
        if (!absoluteDestination.getParent().equals(rootLocation.toAbsolutePath())) {
            throw new StorageException("Cannot store a file outside the current directory!");
        }

        try (InputStream inputStream = file.getInputStream()) {
            Files.copy(inputStream, absoluteDestination, StandardCopyOption.REPLACE_EXISTING);
        } catch (IOException e) {
            throw new StorageException(e.getMessage());
        }

        return destination.toString().replace("\\", "/");
    }
}
