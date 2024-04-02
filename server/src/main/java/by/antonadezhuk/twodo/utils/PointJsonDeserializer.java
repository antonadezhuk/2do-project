package by.antonadezhuk.twodo.utils;

import com.fasterxml.jackson.core.JacksonException;
import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.databind.JsonDeserializer;
import com.fasterxml.jackson.databind.JsonNode;
import org.locationtech.jts.geom.Coordinate;
import org.locationtech.jts.geom.GeometryFactory;
import org.locationtech.jts.geom.Point;

import java.io.IOException;

public class PointJsonDeserializer extends JsonDeserializer<Point> {
    @Override
    public Point deserialize(JsonParser jsonParser, DeserializationContext deserializationContext) throws IOException, JacksonException {
        JsonNode node = jsonParser.getCodec().readTree(jsonParser);

        double x = node.get("coordinates").get(0).asDouble();
        double y = node.get("coordinates").get(1).asDouble();

        return new GeometryFactory().createPoint(new Coordinate(x, y));
    }
}
