FROM maven:3.9.9-eclipse-temurin-17 AS build
WORKDIR /workspace
COPY common-lib ./common-lib
RUN cd common-lib && mvn -q -DskipTests clean install
COPY media-service ./media-service
RUN cd media-service && mvn -q -DskipTests clean package

FROM eclipse-temurin:17-jre-alpine
WORKDIR /app
COPY --from=build /workspace/media-service/target/*.jar app.jar
EXPOSE 8085
ENTRYPOINT ["java","-jar","app.jar"]
