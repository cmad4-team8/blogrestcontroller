FROM tomcat:latest
MAINTAINER Praveen
ADD target/*.war /usr/local/tomcat/webapps/blogrestcontroller.war
ADD setenv.sh /usr/local/tomcat/bin/setenv.sh
