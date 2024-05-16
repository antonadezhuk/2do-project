package by.antonadezhuk.twodo.service;

import by.antonadezhuk.twodo.model.Hobby;

import java.util.List;

public interface HobbyService {

    List<Hobby> getHobbies();

    Hobby getHobbyById(int id);

    Hobby createHobby(Hobby hobby);

    Hobby updateHobbyById(int id, Hobby updatedHobby);

    void deleteHobbyById(int id);
}
