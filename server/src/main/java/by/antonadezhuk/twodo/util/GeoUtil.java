package by.antonadezhuk.twodo.util;

import org.gavaghan.geodesy.Ellipsoid;
import org.gavaghan.geodesy.GeodeticCalculator;
import org.gavaghan.geodesy.GeodeticCurve;
import org.gavaghan.geodesy.GlobalPosition;
import org.locationtech.jts.geom.Point;

public class GeoUtil {

    public static double calculateDistance(Point point1, Point point2) {
        Ellipsoid reference = Ellipsoid.WGS84;

        GlobalPosition globalPoint1 = new GlobalPosition(point1.getX(), point1.getY(), 0.0);
        GlobalPosition globalPoint2 = new GlobalPosition(point2.getX(), point2.getY(), 0.0);

        GeodeticCurve geoCurve = new GeodeticCalculator()
                .calculateGeodeticCurve(reference, globalPoint1, globalPoint2);

        return Math.round((geoCurve.getEllipsoidalDistance() / 1000) * 10.0) / 10.0;
    }
}
