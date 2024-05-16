package by.antonadezhuk.twodo.controller;

import by.antonadezhuk.twodo.dto.HobbyDto;
import by.antonadezhuk.twodo.model.Hobby;
import by.antonadezhuk.twodo.service.HobbyService;
import by.antonadezhuk.twodo.service.mapper.HobbyMapper;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/hobbies")
@RequiredArgsConstructor
public class HobbyController {

    private final HobbyService hobbyService;
    private final HobbyMapper hobbyMapper;

    @GetMapping
    public List<HobbyDto> getHobbies() {
        List<Hobby> hobbies = hobbyService.getHobbies();
        return hobbies.stream()
                .map(hobbyMapper::hobbyToHobbyDto)
                .toList();
    }

    @GetMapping("/{id}")
    public HobbyDto getHobbyById(@PathVariable int id) {
        Hobby hobby = hobbyService.getHobbyById(id);
        return hobbyMapper.hobbyToHobbyDto(hobby);
    }

    @PostMapping
    public HobbyDto createHobby(@RequestBody HobbyDto hobbyDto) {
        Hobby hobby = hobbyService.createHobby(hobbyMapper.hobbyDtoToHobby(hobbyDto));
        return hobbyMapper.hobbyToHobbyDto(hobby);
    }

    @PutMapping("/{id}")
    public HobbyDto updateHobbyById(@PathVariable int id, @RequestBody HobbyDto hobbyDto) {
        Hobby hobby = hobbyService.updateHobbyById(id, hobbyMapper.hobbyDtoToHobby(hobbyDto));
        return hobbyMapper.hobbyToHobbyDto(hobby);
    }

    @DeleteMapping("/{id}")
    public void deleteHobbyById(@PathVariable int id) {
        hobbyService.deleteHobbyById(id);
    }
}
