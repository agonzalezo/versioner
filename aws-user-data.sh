#!/bin/bash
set -u

echo "Installing Nodejs"
cd /home/ec2-user
wget https://nodejs.org/download/release/latest-v24.x/node-v24.13.0-linux-x64.tar.xz
sudo mkdir -p /opt/nodejs/
sudo mkdir -p /opt/apps/
sudo chown -R 1000:1000 /opt/nodejs/
sudo chown -R 1000:1000 /opt/apps/
tar -xJf node-v24.13.0-linux-x64.tar.xz -C /opt/nodejs/
sudo ln -s /opt/nodejs/node-v24.13.0-linux-x64/bin/node /usr/bin/node
sudo ln -s /opt/nodejs/node-v24.13.0-linux-x64/bin/npm /usr/bin/npm

echo "Installing app versioner"
cd /opt/apps && wget https://github.com/agonzalezo/versioner/archive/refs/heads/main.zip
unzip main.zip
cd versioner-main
ls -l
npm ci --only=production && npm cache clean --force

echo "Creating service"
cd /home/ec2-user
cat > versioner.service  <<EOF
[Unit]
Description=Nodejs versioner app
Documentation=https://github.com/agonzalezo/versioner
After=network.target

[Service]
Type=simple
User=ec2-user
WorkingDirectory=/opt/apps/versioner-main
ExecStartPre=ls /opt/apps/versioner-main
ExecStart=node /opt/apps/versioner-main/src/server.js
Environment=APPVERSION=lx0.0.1
RestartSec=10
#Restart=always
Restart=on-failure

[Install]
WantedBy=multi-user.target
EOF
sudo mv versioner.service /usr/lib/systemd/system/versioner.service
sudo systemctl daemon-reload
sudo systemctl start versioner
systemctl status versioner