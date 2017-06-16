FROM tomcat:jre8
MAINTAINER Praveen
rm -rf /opt/tomcat/webapps/examples && \
rm -rf /opt/tomcat/webapps/docs && \
rm -rf /opt/tomcat/webapps/ROOT && \
rm -rf /opt/tomcat/webapps/host-manager && \
rm -rf /opt/tomcat/webapps/manager
COPY blogrestcontroller.war /usr/local/tomcat/webapps/ROOT.war
