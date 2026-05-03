FROM maven:3.9.9-eclipse-temurin-17 AS build
WORKDIR /workspace
COPY common-lib ./common-lib
RUN cd common-lib && mvn -q -DskipTests clean install
COPY ai-service ./ai-service
RUN cd ai-service && mvn -q -DskipTests clean package

FROM eclipse-temurin:17-jre-alpine
WORKDIR /app
COPY --from=build /workspace/ai-service/target/*.jar app.jar
EXPOSE 8086
ENTRYPOINT ["java","-jar","app.jar"]
