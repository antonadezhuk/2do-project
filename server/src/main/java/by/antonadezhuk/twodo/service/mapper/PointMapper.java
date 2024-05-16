package by.antonadezhuk.twodo.service.mapper;

import by.antonadezhuk.twodo.dto.PointDto;
import lombok.RequiredArgsConstructor;
import org.locationtech.jts.geom.Coordinate;
import org.locationtech.jts.geom.GeometryFactory;
import org.locationtech.jts.geom.Point;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class PointMapper {

    public PointDto pointToPointDto(Point point) {
        if (point != null) {
            return PointDto.builder()
                    .x(point.getX())
                    .y(point.getY())
                    .build();
        }
        return null;
    }

    public Point pointDtoToPoint(PointDto pointDto) {
        if (pointDto != null) {
            return new GeometryFactory().createPoint(new Coordinate(pointDto.getX(), pointDto.getY()));
        }
        return null;
    }
}
