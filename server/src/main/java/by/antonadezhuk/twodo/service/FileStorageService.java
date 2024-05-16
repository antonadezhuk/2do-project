package by.antonadezhuk.twodo.service;

import org.springframework.web.multipart.MultipartFile;

public interface FileStorageService {

    void init();

    String store(MultipartFile file);
}
