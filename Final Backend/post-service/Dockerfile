FROM maven:3.9.9-eclipse-temurin-17 AS build
WORKDIR /workspace
COPY common-lib ./common-lib
RUN cd common-lib && mvn -q -DskipTests clean install
COPY post-service ./post-service
RUN cd post-service && mvn -q -DskipTests clean package

FROM eclipse-temurin:17-jre-alpine
WORKDIR /app
COPY --from=build /workspace/post-service/target/*.jar app.jar
EXPOSE 8083
ENTRYPOINT ["java","-jar","app.jar"]
