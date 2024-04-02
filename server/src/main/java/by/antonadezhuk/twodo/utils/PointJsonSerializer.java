package by.antonadezhuk.twodo.utils;

import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.databind.JsonSerializer;
import com.fasterxml.jackson.databind.SerializerProvider;
import org.locationtech.jts.geom.Point;

import java.io.IOException;

public class PointJsonSerializer extends JsonSerializer<Point> {
    @Override
    public void serialize(Point point, JsonGenerator jsonGenerator, SerializerProvider serializerProvider) throws IOException {
        jsonGenerator.writeStartObject();
        jsonGenerator.writeArrayFieldStart("coordinates");
        jsonGenerator.writeNumber(point.getX());
        jsonGenerator.writeNumber(point.getY());
        jsonGenerator.writeEndArray();
        jsonGenerator.writeEndObject();
    }
}

