package by.antonadezhuk.twodo.service.impl;

import by.antonadezhuk.twodo.exception.HobbyNotFoundException;
import by.antonadezhuk.twodo.model.Hobby;
import by.antonadezhuk.twodo.repository.HobbyRepository;
import by.antonadezhuk.twodo.service.HobbyService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class HobbyServiceImpl implements HobbyService {

    private final HobbyRepository hobbyRepository;

    @Override
    public List<Hobby> getHobbies() {
        return hobbyRepository.findAllByOrderByNameAsc();
    }

    @Override
    public Hobby getHobbyById(int id) {
        return hobbyRepository
                .findById(id)
                .orElseThrow(() -> new HobbyNotFoundException("Hobby with this ID does not exist!"));
    }

    @Override
    public Hobby createHobby(Hobby hobby) {
        return hobbyRepository.save(hobby);
    }

    @Override
    public Hobby updateHobbyById(int id, Hobby updatedHobby) {
        Hobby hobbyToUpdate = hobbyRepository
                .findById(id)
                .orElseThrow(() -> new HobbyNotFoundException("Hobby with this ID does not exist!"));
        hobbyToUpdate.setName(updatedHobby.getName());
        hobbyToUpdate.setIconName(updatedHobby.getIconName());
        return hobbyRepository.save(hobbyToUpdate);
    }

    @Override
    public void deleteHobbyById(int id) {
        Hobby hobbyToDelete = hobbyRepository
                .findById(id)
                .orElseThrow(() -> new HobbyNotFoundException("Hobby with this ID does not exist!"));
        hobbyRepository.delete(hobbyToDelete);
    }
}
