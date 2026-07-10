---
title: "Complete Guide: Setting Up FreePBX with VPS, Docker, and VPN (CGNAT Bypass Solution)"
publishedAt: 2025-07-18T05:00:42
summary: "Complete FreePBX Setup Guide – Docker, VPN, and Twilio Integration Requirements / Setup Digital Ocean or whatever cloud provider you choose Docker (FreePBX) Nginx Setup OVPN Configuration IP Tables Setup YeaLink Phone configuration, the (YeaLinkT45w) was used in this tutorial Twi"
category: "Becoming Self Sufficient"
categories:
  - "Becoming Self Sufficient"
  - "Business"
  - "Projects"
tags:
  - "freePBX"
  - "ip phone"
  - "VPN"
  - "VPS"
heroImage: "/wp-content/uploads/2025/07/Freepbx.png"
wpId: 1667
wpSlug: "complete-guide-setting-up-freepbx-with-vps-docker-and-vpn-cgnat-bypass-solution"
originalLink: "https://bulwarkblack.com/complete-guide-setting-up-freepbx-with-vps-docker-and-vpn-cgnat-bypass-solution"
draft: false
---


<!DOCTYPE html>
<html>
<head>
<style>
.pbx-guide-container {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
    line-height: 1.6;
    color: #333;
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
}

.pbx-guide-container h1 {
    color: #2c3e50;
    border-bottom: 3px solid #3498db;
    padding-bottom: 10px;
    margin-bottom: 30px;
}

.pbx-guide-container h2 {
    color: #34495e;
    margin-top: 40px;
    margin-bottom: 20px;
    padding-left: 10px;
    border-left: 4px solid #3498db;
}

.pbx-guide-container h3 {
    color: #555;
    margin-top: 25px;
    margin-bottom: 15px;
}

.pbx-guide-container h4 {
    color: #666;
    margin-top: 20px;
    margin-bottom: 10px;
}

.pbx-guide-container .code-block {
    background: #f4f4f4;
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 15px;
    margin: 10px 0;
    overflow-x: auto;
    font-family: 'Courier New', Courier, monospace;
    font-size: 14px;
    line-height: 1.4;
    white-space: pre-wrap;
}

.pbx-guide-container .inline-code {
    background: #f0f0f0;
    padding: 2px 6px;
    border-radius: 3px;
    font-family: 'Courier New', Courier, monospace;
    font-size: 14px;
}

.pbx-guide-container .warning-box {
    background: #fff3cd;
    border: 1px solid #ffeaa7;
    border-radius: 4px;
    padding: 15px;
    margin: 20px 0;
}

.pbx-guide-container .info-box {
    background: #d1ecf1;
    border: 1px solid #bee5eb;
    border-radius: 4px;
    padding: 15px;
    margin: 20px 0;
}

.pbx-guide-container .success-box {
    background: #d4edda;
    border: 1px solid #c3e6cb;
    border-radius: 4px;
    padding: 15px;
    margin: 20px 0;
}

.pbx-guide-container .problem-box {
    background: #f8d7da;
    border: 1px solid #f5c6cb;
    border-radius: 4px;
    padding: 15px;
    margin: 20px 0;
}

.pbx-guide-container table {
    border-collapse: collapse;
    width: 100%;
    margin: 20px 0;
}

.pbx-guide-container table th,
.pbx-guide-container table td {
    border: 1px solid #ddd;
    padding: 12px;
    text-align: left;
}

.pbx-guide-container table th {
    background: #f8f9fa;
    font-weight: bold;
}

.pbx-guide-container table tr:nth-child(even) {
    background: #f8f9fa;
}

.pbx-guide-container ul, .pbx-guide-container ol {
    margin: 15px 0;
    padding-left: 30px;
}

.pbx-guide-container li {
    margin-bottom: 8px;
}

.pbx-guide-container .section-box {
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    padding: 20px;
    margin: 20px 0;
    background: #fafafa;
}
</style>
</head>
<body>

<div class="pbx-guide-container">

<h1>Complete FreePBX Setup Guide &#8211; Docker, VPN, and Twilio Integration</h1>

<h2>Requirements / Setup</h2>

<ul>
    <li>Digital Ocean or whatever cloud provider you choose</li>
    <li>Docker (FreePBX)</li>
    <li>Nginx Setup</li>
    <li>OVPN Configuration</li>
    <li>IP Tables Setup</li>
    <li>YeaLink Phone configuration, the (YeaLinkT45w) was used in this tutorial</li>
    <li>Twilio Phone service</li>
    <li>FreePBX Setup</li>
</ul>

<h2>Digital Ocean Configuration</h2>

<div class="section-box">
<p><strong>Host name:</strong> ubuntu-X-XXXXX-XXX-XXXX-XX</p>
<p><strong>Name:</strong> Whatever-PBX</p>
<p><strong>Machine Specs:</strong> 2 GB Memory / 25 GB Disk / SFO3 &#8211; Ubuntu 22.04 (LTS) x64</p>
<p><strong>IP:</strong> X.X.X.X</p>
<p><strong>Cost:</strong> $12 Dollars a month (Needed to upgrade because of Ram requirement for FreePBX. It could have ran ok but would probably have issues in the future.)</p>
</div>

<h2>Docker Setup</h2>

<h3>Summary of Docker and Docker Compose Setup</h3>

<p>This document outlines the steps taken to install Docker and configure a persistent FreePBX container using Docker Compose.</p>

<h3>1. Goal</h3>

<p>The objective was to run a FreePBX instance inside a Docker container while ensuring that all of its critical data (configurations, settings, logs, etc.) would be saved on the host machine. This prevents data loss if the container is ever removed or re-created.</p>

<h3>2. Installation</h3>

<p>First, I installed the necessary software on the VPS.</p>

<ul>
    <li><strong>Docker Engine:</strong> The core service that runs containers.</li>
    <li><strong>Docker Compose:</strong> A tool that makes it easy to define and manage multi-container applications using a single YAML file.</li>
</ul>

<div class="code-block"># Update package list
sudo apt update

# Install Docker and Docker Compose
sudo apt install docker.io docker-compose -y</div>

<h3>3. Creating the Host Directory Structure</h3>

<p>To keep the persistent data organized, I created a specific directory structure in your home folder on the VPS.</p>

<p><strong>Command:</strong></p>
<div class="code-block">mkdir -p ~/docker-freepbx/data
mkdir -p ~/docker-freepbx/logs</div>

<p><strong>Purpose:</strong></p>
<ul>
    <li><span class="inline-code">/root/docker-freepbx/data</span>: This folder on the host machine is &#8220;mounted&#8221; into the container. All of FreePBX&#8217;s database files, settings, and configurations are stored here.</li>
    <li><span class="inline-code">/root/docker-freepbx/logs</span>: This folder is used to store the Asterisk log files, making them easily accessible for troubleshooting from the host.</li>
</ul>

<h3>4. The docker-compose.yml Configuration File</h3>

<p>This is the most important file. It serves as the blueprint for your entire FreePBX deployment. I created it inside the ~/docker-freepbx/ directory.</p>

<p><strong>File Location:</strong> /root/docker-freepbx/docker-compose.yml</p>

<p><strong>Final Contents:</strong></p>

<div class="code-block">version: &#8216;3&#8217;

services:
  freepbx:
    image: tiredofit/freepbx:latest
    container_name: freepbx
    ports:
      &#8211; &#8220;8080:80&#8221;
      &#8211; &#8220;8443:443&#8221;
      &#8211; &#8220;5060:5060/udp&#8221;
      &#8211; &#8220;5160:5160/udp&#8221;
      &#8211; &#8220;18000-18100:18000-18100/udp&#8221;
    environment:
      &#8211; RTP_START=18000
      &#8211; RTP_FINISH=18100
      &#8211; SIPPROXY=off
    volumes:
      &#8211; ./data:/data
      &#8211; ./logs:/var/log
    restart: always</div>

<h4>Key Directives Explained:</h4>

<ul>
    <li><strong>image: tiredofit/freepbx:15.0:</strong> Specifies the exact FreePBX image to download from Docker Hub.</li>
    <li><strong>ports:</strong> Maps ports from the host VPS to the container. For example, &#8211; &#8220;80:80&#8221; maps the host&#8217;s port 80 to the container&#8217;s port 80, making the web UI accessible.</li>
    <li><strong>volumes:</strong> This is what makes your data persistent. It links the host directories we created (/root/docker-freepbx/data) to the corresponding data directories inside the container.</li>
    <li><strong>restart: always:</strong> Tells Docker to automatically restart the container if it ever crashes or if the server reboots.</li>
</ul>

<h3>5. The Critical Permissions Fix</h3>

<p>This was a major troubleshooting step that solved the problem of settings (like SIP secrets) not saving.</p>

<div class="problem-box">
<p><strong>Problem:</strong> The FreePBX web UI could not write its settings to the database files.</p>
<p><strong>Cause:</strong> The directories on the host (/root/docker-freepbx/data) were owned by the root user, but the web server process inside the container was running as a different, non-root user (ID 1000). This created a permissions conflict.</p>
</div>

<p><strong>Solution:</strong> I stopped the container and changed the ownership of the data directories on the host to match the user ID inside the container.</p>

<div class="code-block"># Stop the container first
docker stop freepbx

# Change ownership of the data and log directories
sudo chown -R 1000:1000 /root/docker-freepbx/data/
sudo chown -R 1000:1000 /root/docker-freepbx/logs/

# Restart the container
docker start freepbx</div>

<h3>6. Essential Management Commands</h3>

<p>These are the most common commands for managing your Docker setup. They should be run from within the ~/docker-freepbx/ directory.</p>

<ul>
    <li><strong>Start the system:</strong> <span class="inline-code">docker-compose up -d</span></li>
    <li><strong>Stop the system:</strong> <span class="inline-code">docker-compose down</span></li>
    <li><strong>Restart a specific container:</strong> <span class="inline-code">docker restart freepbx</span></li>
    <li><strong>View running containers:</strong> <span class="inline-code">docker ps</span></li>
    <li><strong>View logs for a container:</strong> <span class="inline-code">docker logs freepbx</span></li>
    <li><strong>Access a container&#8217;s command line:</strong> <span class="inline-code">docker exec -it freepbx bash</span></li>
</ul>

<h2>NginX Setup</h2>

<h3>Objective</h3>

<p>Serve your FreePBX Docker container (HTTPS on port 8443) via your public domain pbx.yourdomain.com using NGINX as a reverse proxy and Let&#8217;s Encrypt SSL certificates with automatic renewal. This now includes DNS A record setup instructions.</p>

<h3>🌐 1. DNS Provider Configuration</h3>

<p>You must configure your domain to point to your server&#8217;s public IP before installing and using SSL.</p>

<h4>🛠️ Steps:</h4>

<ol>
    <li>Log into your DNS provider&#8217;s control panel (e.g., Cloudflare, Namecheap, GoDaddy).</li>
    <li>Go to DNS Settings for your domain (yourdomain.com).</li>
    <li>Add an A Record:
        <ul>
            <li><strong>Type:</strong> A</li>
            <li><strong>Name:</strong> pbx (this makes pbx.yourdomain.com)</li>
            <li><strong>Value:</strong> &lt;Cloud Provider IP&gt; (your VPS public IP)</li>
            <li><strong>TTL:</strong> Auto or 5 mins</li>
            <li><strong>Proxy status:</strong> DNS only (⚠️ turn off proxy/CDN if using Cloudflare or it may interfere with validation)</li>
        </ul>
    </li>
</ol>

<p>✅ Once added, allow a few minutes for DNS to propagate globally.</p>

<h4>🧪 Test It:</h4>

<div class="code-block">nslookup pbx.yourdomain.com</div>

<p>You should see your VPS IP returned.</p>

<h3>🖧 2. Install Required Packages</h3>

<div class="code-block">sudo apt update
sudo apt install nginx certbot python3-certbot-nginx</div>

<h3>📁 3. Configure NGINX for Reverse Proxy</h3>

<p><strong>📄 /etc/nginx/sites-available/freepbx</strong></p>

<div class="code-block">server {
    if ($host = pbx.yourdomain.com) {
        return 301 https://$host$request_uri;
    } # managed by Certbot

    listen 80;
    server_name pbx.yourdomain.com;

    location / {
        return 301 https://$host$request_uri;
    }
}

server {
    listen 443 ssl;
    server_name pbx.yourdomain.com;
    ssl_certificate /etc/letsencrypt/live/pbx.yourdomain.com/fullchain.pem; # managed by Certbot
    ssl_certificate_key /etc/letsencrypt/live/pbx.yourdomain.com/privkey.pem; # managed by Certbot

    location / {
        proxy_pass https://localhost:8443;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;

        # Allow websocket for UCP
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection &#8220;upgrade&#8221;;
    }
}</div>

<p>Enable the config:</p>

<div class="code-block">sudo ln -s /etc/nginx/sites-available/freepbx /etc/nginx/sites-enabled/
sudo nginx -t &#038;&#038; sudo systemctl reload nginx</div>

<h3>🔐 4. Use Certbot to Secure the Domain</h3>

<p>Run this only after your DNS A record is active:</p>

<div class="code-block">sudo certbot &#8211;nginx -d pbx.yourdomain.com</div>

<p>This will:</p>
<ul>
    <li>Validate the domain via HTTP-01</li>
    <li>Add the cert paths to your NGINX config</li>
    <li>Reload NGINX with HTTPS enabled</li>
</ul>

<h3>🐳 5. Ensure Dockerized FreePBX is Listening on Port 8443</h3>

<p>Run:</p>

<div class="code-block">docker ps
docker inspect &lt;container_id&gt; | grep 8443</div>

<p>It should expose 8443 and be reachable locally:</p>

<div class="code-block">curl -k https://localhost:8443</div>

<h3>🔁 6. Set Up SSL Auto-Renewal</h3>

<p>Let&#8217;s Encrypt sets up a systemd timer:</p>

<div class="code-block">sudo systemctl list-timers | grep certbot</div>

<p>You can test renewals manually:</p>

<div class="code-block">sudo certbot renew &#8211;dry-run</div>

<h3>📂 7. Summary of Files and Services</h3>

<table>
<tr>
    <th>Path / File</th>
    <th>Purpose</th>
</tr>
<tr>
    <td>/etc/nginx/sites-available/freepbx</td>
    <td>Main NGINX site config</td>
</tr>
<tr>
    <td>/etc/nginx/sites-enabled/freepbx</td>
    <td>Enabled symlink</td>
</tr>
<tr>
    <td>/etc/letsencrypt/live/pbx.yourdomain.com/fullchain.pem</td>
    <td>Cert</td>
</tr>
<tr>
    <td>/etc/letsencrypt/live/pbx.yourdomain.com/privkey.pem</td>
    <td>Private key</td>
</tr>
<tr>
    <td>/var/log/letsencrypt/letsencrypt.log</td>
    <td>Certbot log</td>
</tr>
<tr>
    <td>/usr/bin/certbot</td>
    <td>Certbot binary</td>
</tr>
<tr>
    <td>/etc/systemd/system/timers.target.wants/certbot.timer</td>
    <td>Certbot auto-renewal</td>
</tr>
</table>

<h3>✅ Final Test</h3>

<ul>
    <li>Visit: https://pbx.yourdomain.com</li>
    <li>You should reach your FreePBX admin panel (proxied via HTTPS).</li>
    <li>No security warnings should appear.</li>
</ul>

<h2>OVPN Setup</h2>

<h3>Install OpenVPN and Easy-RSA</h3>

<div class="code-block">sudo apt install openvpn easy-rsa -y</div>

<h3>3.2 Set Up Certificate Authority</h3>

<div class="code-block"># Copy Easy-RSA files
make-cadir ~/openvpn-ca
cd ~/openvpn-ca

# Initialize PKI
./easyrsa init-pki

# Build CA (follow prompts)
./easyrsa build-ca nopass

# Generate server certificate
./easyrsa gen-req server nopass
./easyrsa sign-req server server

# Generate Diffie-Hellman parameters
./easyrsa gen-dh

# Generate client certificate for phone
./easyrsa gen-req yealink-t45w nopass
./easyrsa sign-req client yealink-t45w</div>

<h3>3.3 Create Server Configuration</h3>

<p>Create /etc/openvpn/server/server.conf:</p>

<div class="code-block">port 1194
proto udp
dev tun

ca /usr/share/easy-rsa/pki/ca.crt
cert /usr/share/easy-rsa/pki/issued/server.crt
key /usr/share/easy-rsa/pki/private/server.key
dh /usr/share/easy-rsa/pki/dh.pem

server 10.8.0.0 255.255.255.0
ifconfig-pool-persist ipp.txt

push &#8220;redirect-gateway def1 bypass-dhcp&#8221;
push &#8220;dhcp-option DNS 8.8.8.8&#8221;
push &#8220;dhcp-option DNS 1.1.1.1&#8221;
push &#8220;route 172.18.0.0 255.255.0.0&#8221;

keepalive 10 120

user nobody
group nogroup
persist-key
persist-tun

status /var/log/openvpn/openvpn-status.log
log-append /var/log/openvpn/openvpn.log
verb 3
explicit-exit-notify 1</div>

<h3>3.4 Generate TLS-Auth Key</h3>

<div class="code-block">sudo openvpn &#8211;genkey &#8211;secret /etc/openvpn/server/ta.key</div>

<h3>3.5 Copy Certificates to OpenVPN Directory</h3>

<div class="code-block">sudo cp ~/openvpn-ca/pki/ca.crt /usr/share/easy-rsa/pki/
sudo cp -r ~/openvpn-ca/pki/issued /usr/share/easy-rsa/pki/
sudo cp -r ~/openvpn-ca/pki/private /usr/share/easy-rsa/pki/
sudo cp ~/openvpn-ca/pki/dh.pem /usr/share/easy-rsa/pki/</div>

<h3>3.6 Start OpenVPN Service</h3>

<div class="code-block"># Create log directory
sudo mkdir -p /var/log/openvpn

# Start and enable service
sudo systemctl start openvpn-server@server
sudo systemctl enable openvpn-server@server</div>

<h2>VPN Server and Certificate Setup Possible Problems</h2>

<p>The initial goal was to create a secure VPN tunnel for the phone.</p>

<div class="problem-box">
<p><strong>Problem:</strong> The phone could not connect to the VPN.</p>
<p><strong>Cause:</strong> The OpenVPN server service was not running. This was due to multiple issues, including the server.conf file not existing, and then missing paths to the dh.pem and ta.key files.</p>
</div>

<p><strong>Solution &#038; Key Steps:</strong></p>

<ol>
    <li><strong>Install Tools:</strong> I started with openvpn and easy-rsa installed on the Ubuntu VPS.</li>
    
    <li><strong>Create Certificate Authority (CA):</strong> I used Easy-RSA to init-pki and build-ca, creating the master certificate that would sign all other certificates.
        <div class="code-block">./easyrsa init-pki</div>
    </li>
    
    <li><strong>Create Client Keys:</strong> I generated a certificate request and private key for the Yealink phone (<span class="inline-code">./easyrsa gen-req yealink-t45w nopass</span>).</li>
    
    <li><strong>Signed Client Keys:</strong> I then signed the phone&#8217;s request with the CA (<span class="inline-code">./easyrsa sign-req client yealink-t45w</span>) to create a valid certificate.</li>
    
    <li><strong>Create Server Keys:</strong> I also did the same for the server itself, creating a server certificate, private key, and Diffie-Hellman parameters (<span class="inline-code">./easyrsa build-server-full server nopass</span> and <span class="inline-code">./easyrsa gen-dh</span>).</li>
    
    <li><strong>Create TLS-Auth Key:</strong> For added security, I generated a static key to protect against DoS attacks.
        <div class="code-block">sudo openvpn &#8211;genkey &#8211;secret /etc/openvpn/server/ta.key</div>
    </li>
    
    <li><strong>Start and Enable Service:</strong>
        <div class="code-block">sudo systemctl start openvpn-server@server.service
sudo systemctl enable openvpn-server@server.service</div>
    </li>
</ol>

<h3>Server.conf</h3>

<div class="code-block">root@ubuntu-s-1vcpu-1gb-sfo3-01:~# cat /etc/openvpn/server/server.conf 
port 1194
proto udp
dev tun

ca /usr/share/easy-rsa/pki/ca.crt
cert /usr/share/easy-rsa/pki/issued/server.crt
key /usr/share/easy-rsa/pki/private/server.key
dh /usr/share/easy-rsa/pki/dh.pem
tls-auth /etc/openvpn/server/ta.key 0 # This file is secret

server 10.8.0.0 255.255.255.0
ifconfig-pool-persist ipp.txt

push &#8220;redirect-gateway def1 bypass-dhcp&#8221;
push &#8220;dhcp-option DNS 8.8.8.8&#8221;
push &#8220;dhcp-option DNS 1.1.1.1&#8221;
push &#8220;route 172.18.0.0 255.255.0.0&#8221;

keepalive 10 120

user nobody
group nogroup
persist-key
persist-tun

status /var/log/openvpn/openvpn-status.log
log-append /var/log/openvpn/openvpn.log
verb 3
explicit-exit-notify 1
root@ubuntu-s-1vcpu-1gb-sfo3-01:~#</div>

<h2>IP Tables Setup</h2>

<p>See Bottom of Article for full IP Tables configuration</p>

<h2>YeaLink T45w Phone Configuration</h2>

<h3>7.1 Create VPN Configuration Package</h3>

<p>The Yealink phone requires a specific .tar file structure:</p>

<ol>
    <li>Create directory structure:
        <div class="code-block">mkdir -p ~/yealink-vpn/keys
cd ~/yealink-vpn</div>
    </li>
    
    <li>Copy client certificates:
        <div class="code-block">cp ~/openvpn-ca/pki/ca.crt keys/
cp ~/openvpn-ca/pki/issued/yealink-t45w.crt keys/
cp ~/openvpn-ca/pki/private/yealink-t45w.key keys/
cp /etc/openvpn/server/ta.key keys/</div>
    </li>
    
    <li>Create vpn.cnf file:
        <div class="code-block">client
dev tun
proto udp
remote YOUR_VPS_IP 1194
resolv-retry infinite
nobind
persist-key
persist-tun
ca keys/ca.crt
cert keys/yealink-t45w.crt
key keys/yealink-t45w.key
tls-auth keys/ta.key 1
cipher AES-256-CBC
verb 3</div>
    </li>
    
    <li>Create tar file:
        <div class="code-block">tar -cf yealink-vpn.tar vpn.cnf keys/</div>
    </li>
</ol>

<h3>7.2 Configure Phone</h3>

<ol>
    <li>Access phone web interface (usually http://phone-ip)</li>
    <li>Go to Network → VPN</li>
    <li>Upload the .tar file using the first upload button</li>
    <li>Enable VPN</li>
</ol>

<h3>7.3 Register Extension</h3>

<p>Go to Account → Register</p>

<p>Configure Account 1:</p>
<ul>
    <li><strong>Line Active:</strong> ON</li>
    <li><strong>Label:</strong> 101</li>
    <li><strong>Display Name:</strong> Office Phone</li>
    <li><strong>Register Name:</strong> 101</li>
    <li><strong>Username:</strong> 101</li>
    <li><strong>Password:</strong> Your extension secret</li>
    <li><strong>Server Host:</strong> 172.18.0.2 (Docker container IP)</li>
</ul>

<h2>Yealink Phone Configuration &#038; Quirks</h2>

<p>This phase focused on getting the client-side configuration correct for the phone&#8217;s specific firmware behavior.</p>

<div class="problem-box">
<p><strong>Problem:</strong> The phone would not connect to the VPN, or would connect but have no network access. I discovered the phone was mishandling the configuration package.</p>
<p><strong>Cause:</strong> Yealink firmware can be very specific and buggy about the format and contents of the VPN configuration package.</p>
</div>

<p><strong>Solution &#038; Key Steps:</strong></p>

<ol>
    <li><strong>Initial Attempt (.tar with vpn.cnf):</strong> My first attempt at creating and uploading an openvpn.tar file with vpn.cnf in the root and keys in a keys/ subdirectory. The phone appeared to upload it but only processed the .cnf file, ignoring the essential keys.</li>
    
    <li><strong>Troubleshooting Detour 1 (.ovpn):</strong> Suspecting a filename issue, I renamed vpn.cnf to vpn.ovpn inside the .tar archive. This caused the phone to fail the upload entirely, proving it was specifically looking for vpn.cnf.</li>
    
    <li><strong>Troubleshooting Detour 2 (Inline .ovpn):</strong> I bypassed the .tar method and created a single, all-in-one .ovpn file with all keys embedded. The phone&#8217;s &#8220;Import&#8221; function would not accept this file format either.</li>
    
    <li><strong>Final Solution (Corrected .tar):</strong> I finally concluded the phone required the .tar format with the vpn.cnf and keys/ structure. The initial failure was actually due to the server-side configuration being incomplete at the time. Once the server was fully working, the original, correctly structured .tar file was accepted and processed properly.</li>
    
    <li><strong>Factory Reset:</strong> When the phone failed to save the SIP password correctly, I performed a factory reset to clear any stuck or partially provisioned settings. This resolved the password saving issue.</li>
</ol>

<h3>yealink tar file config setup</h3>

<h2>Twilio Configuration / Setup</h2>

<h3>Summary of Twilio Elastic SIP Trunk Configuration</h3>

<p>This document outlines the final, correct steps to configure a Twilio Elastic SIP Trunk for use with a Dockerized FreePBX instance. This setup uses IP-based authentication, which is secure and does not require registering the trunk with a username and password.</p>

<h3>Part 1: Twilio Account Configuration</h3>

<h4>Twilio Account Setup</h4>

<p>First, you&#8217;ll need a Twilio account and a phone number:</p>

<ol>
    <li>Sign up for a Twilio account at twilio.com</li>
    <li>Purchase a phone number from Twilio (about $1/month)</li>
    <li>Navigate to the Elastic SIP Trunking section in your Twilio Console</li>
</ol>

<h3>6.2 Create IP Access Control List (Required for Security)</h3>

<p>Twilio uses IP-based authentication instead of username/password. You must whitelist your VPS IP:</p>

<ol>
    <li>In Twilio Console, go to Elastic SIP Trunking → Authentication → IP Access Control Lists</li>
    <li>Click Create new IP Access Control List</li>
    <li>Name it something descriptive like &#8220;FreePBX Server&#8221;</li>
    <li>Click Create</li>
</ol>

<p>Now add your VPS IP:</p>
<ol>
    <li>Click on your new ACL</li>
    <li>Click Add IP Address</li>
    <li>Enter your VPS public IP with /32 subnet (e.g., YOUR_VPS_IP/32)</li>
    <li>Click Add IP Address</li>
</ol>

<h3>6.3 Create the Elastic SIP Trunk</h3>

<ol>
    <li>Go to Elastic SIP Trunking → Trunks</li>
    <li>Click Create new SIP Trunk</li>
    <li>Give it a friendly name like &#8220;PBX-Trunk&#8221;</li>
    <li>Click Create</li>
</ol>

<h3>6.4 Configure Trunk Termination (Outbound Calls)</h3>

<p>This tells Twilio where to receive calls FROM your PBX:</p>

<ol>
    <li>Click on your new trunk</li>
    <li>Go to the Termination tab</li>
    <li>Under Termination SIP URI:
        <ul>
            <li>Click Add new Termination SIP URI</li>
            <li>Create a unique name (e.g., mypbx.pstn.ashburn.twilio.com)</li>
            <li>Select your region (e.g., Ashburn for US East)</li>
            <li>Priority: 10</li>
            <li>Weight: 10</li>
            <li>Click Save</li>
        </ul>
    </li>
    <li>Under Authentication:
        <ul>
            <li>Select IP Access Control Lists</li>
            <li>Choose the ACL you created earlier</li>
            <li>Click Save</li>
        </ul>
    </li>
</ol>

<h3>6.5 Configure Trunk Origination (Inbound Calls)</h3>

<p>This tells Twilio where to send calls TO your PBX:</p>

<ol>
    <li>Stay in your trunk settings, go to the Origination tab</li>
    <li>Click Add new Origination URI</li>
    <li>Configure:
        <ul>
            <li>Origination SIP URI: sip:YOUR_VPS_IP:5060</li>
            <li>Priority: 10</li>
            <li>Weight: 10</li>
            <li>Enabled: Yes</li>
        </ul>
    </li>
    <li>Click Add</li>
</ol>

<h3>6.6 Assign Phone Number to Trunk</h3>

<ol>
    <li>Go to the Numbers tab in your trunk</li>
    <li>Click Add an Existing Number</li>
    <li>Select your Twilio phone number from the dropdown</li>
    <li>Click Add</li>
</ol>

<h2>FreePBX Setup</h2>

<h3>FreePBX Setup Guide: Twilio PJSIP Trunk</h3>

<p>This document details the final, working configuration for a PJSIP trunk connecting FreePBX to a Twilio Elastic SIP Trunk. It includes the trunk settings, the necessary call routing, and an explanation of the troubleshooting steps that led to this specific configuration.</p>

<p><strong>Prerequisite:</strong> This guide assumes your core network settings under Settings -> Asterisk SIP Settings are correct (External IP and Local Networks are defined).</p>

<h3>Part 1: The PJSIP Trunk Configuration</h3>

<p>This is the main connection that handles call signaling between your PBX and Twilio.</p>

<p><strong>Navigation:</strong> Connectivity -> Trunks -> + Add Trunk -> + Add SIP (chan_pjsip) Trunk</p>

<h4>&#8220;General&#8221; Tab</h4>

<ul>
    <li><strong>Trunk Name:</strong> Twilio</li>
    <li><strong>Outbound CallerID:</strong> Your Twilio number in E.164 format: +1XXXXXXXXXX</li>
</ul>

<h4>&#8220;pjsip Settings&#8221; -> &#8220;General&#8221; Sub-Tab</h4>

<ul>
    <li><strong>Authentication:</strong> None</li>
    <li><strong>Registration:</strong> None</li>
    <li><strong>SIP Server:</strong> yourname.pstn.ashburn.twilio.com (The regional Termination URI from your Twilio dashboard)</li>
    <li><strong>Context:</strong> from-pstn</li>
</ul>

<h4>&#8220;pjsip Settings&#8221; -> &#8220;Advanced&#8221; Sub-Tab</h4>

<ul>
    <li><strong>From Domain:</strong> yourname.pstn.ashburn.twilio.com (Must match the SIP Server)</li>
    <li><strong>Direct Media:</strong> No</li>
    <li><strong>Contact User:</strong> 101 (Your extension number)</li>
    <li><strong>Send RPID/PAI:</strong> Send P-Asserted-Identity header</li>
</ul>

<h3>Summary</h3>

<h3>FreePBX Core Setup: Asterisk SIP Settings</h3>

<p>This section covers the essential network configuration for the Asterisk engine that powers FreePBX. These settings are the foundation for ensuring calls, especially those crossing different networks (like from a VPN or the public internet), have two-way audio.</p>

<p><strong>Navigation:</strong></p>
<ol>
    <li>In the FreePBX web UI, go to Settings -> Asterisk SIP Settings.</li>
    <li>Click on the Chan PJSIP Settings tab.</li>
</ol>

<h3>1. External IP Address</h3>

<p>This is the single most important setting for NAT traversal. You must tell FreePBX what its public IP address is so it can correctly construct SIP packets. When a call is made, Asterisk uses this IP address in the SIP/SDP headers to tell the other party where to send the audio (RTP) stream back to.</p>

<ul>
    <li><strong>Setting:</strong> External IP Address</li>
    <li><strong>Your Value:</strong> [YOUR_VPS_PUBLIC_IP]</li>
    <li><strong>Why it&#8217;s important:</strong> If this is blank or incorrect, Asterisk will use its private Docker IP (172.18.0.2) in the audio headers. An external device (like Twilio&#8217;s servers or your phone on a different network) has no way to route audio to that private address, resulting in one-way audio.</li>
</ul>

<h3>2. Local Networks</h3>

<p>This field tells FreePBX which IP address ranges it should consider &#8220;friendly&#8221; or &#8220;local.&#8221; Any device connecting from an IP in this list will be treated as if it&#8217;s on the same local network, which allows for direct media paths and proper NAT handling.</p>

<ul>
    <li><strong>Setting:</strong> Local Networks</li>
    <li><strong>Your Values (each on a new line):</strong>
        <div class="code-block">127.0.0.1/32
172.18.0.0/16
10.8.0.0/24</div>
    </li>
</ul>

<p><strong>Explanation of each network:</strong></p>
<ul>
    <li><strong>127.0.0.1/32:</strong> This is the server&#8217;s &#8220;localhost&#8221; or loopback address. It&#8217;s essential for internal communication within the server itself.</li>
    <li><strong>172.18.0.0/16:</strong> This is the private network created by Docker for your FreePBX container. Adding it ensures proper communication between the container and the host.</li>
    <li><strong>10.8.0.0/24:</strong> This is your OpenVPN client network. Adding this was the critical step that allowed your Yealink phone to register and be treated as a trusted local device.</li>
</ul>

<h3>Final Configuration View:</h3>

<p>After verifying these settings are correct, you must click Submit and then the red Apply Config button. For these core network settings, it is always recommended to perform a full restart of the service (docker restart freepbx) to ensure they are loaded cleanly.</p>

<h3>FreePBX Setup Guide: Inbound Call Routing</h3>

<p>This document provides a detailed breakdown of how to configure FreePBX to correctly handle incoming calls from your Twilio SIP trunk and route them to your internal extension.</p>

<h3>1. The Goal</h3>

<p>The objective is to create a rule that tells FreePBX: &#8220;When a call arrives from the public telephone network via the Twilio trunk for a specific phone number, send that call to this specific internal extension.&#8221;</p>

<p>Without this rule, FreePBX receives the call but has no instructions on what to do with it, which results in the caller hearing a ringback tone while no internal phones actually ring.</p>

<h3>2. The Two Key Components</h3>

<p>Getting inbound routing to work correctly involves two separate but related configurations in FreePBX.</p>

<h4>Component A: The Trunk&#8217;s Context</h4>

<p>The first step is to ensure that calls coming from your Twilio trunk are correctly identified as being from the &#8220;outside world.&#8221; This is handled by the Context setting on the trunk itself.</p>

<ul>
    <li><strong>Navigation:</strong> Connectivity -> Trunks -> Edit your Twilio trunk -> pjsip Settings tab -> General sub-tab.</li>
    <li><strong>Setting:</strong> Context</li>
    <li><strong>Your Value:</strong> from-pstn</li>
    <li><strong>Why it&#8217;s important:</strong> The from-pstn context is a special, pre-defined entry point in FreePBX&#8217;s dialplan. It tells the system to immediately look at your Inbound Routes to find a match for the dialed number. If this is set incorrectly, the call will never reach the Inbound Routes section.</li>
</ul>

<h4>Component B: The Inbound Route Rule</h4>

<p>This is the specific instruction that connects a public phone number to an internal destination.</p>

<p><strong>Navigation:</strong> Connectivity -> Inbound Routes -> + Add Inbound Route.</p>

<ul>
    <li><strong>Description:</strong>
        <ul>
            <li>This is just a friendly name for your reference.</li>
            <li><strong>Your Value:</strong> Twilio-Inbound-Main</li>
        </ul>
    </li>
    
    <li><strong>DID Number (The Most Critical Field):</strong>
        <ul>
            <li>DID stands for &#8220;Direct Inward Dialing.&#8221; This field must contain the phone number exactly as Twilio sends it to your PBX.</li>
            <li><strong>Your Value:</strong> +1XXXXXXXXXX</li>
            <li><strong>Why it&#8217;s important:</strong> During the torturous troubleshooting session, I confirmed from logs that Twilio sends the number in the full E.164 format, which includes the country code and a + sign. If this field was set to XXXXXXXXXX or 1XXXXXXXXXX, FreePBX would not find a match and would not know what to do with the call.</li>
        </ul>
    </li>
    
    <li><strong>Set Destination:</strong>
        <ul>
            <li>This tells FreePBX where to send the call after it finds a match on the DID Number.</li>
            <li><strong>Your Value:</strong> I set the destination to Extension and selected your internal extension, 101.</li>
        </ul>
    </li>
</ul>

<h3>Final Configuration View:</h3>

<h4>Component A: Route Settings</h4>

<p>This tab gives the route a name and, most importantly, links it to the correct trunk.</p>

<ul>
    <li><strong>Route Name:</strong>
        <ul>
            <li>A friendly name for your reference.</li>
            <li><strong>Your Value:</strong> Twilio-Outbound</li>
        </ul>
    </li>
    
    <li><strong>Trunk Sequence for Matched Routes:</strong>
        <ul>
            <li>This tells FreePBX which trunk(s) to use when a dialed number matches the rules on this route.</li>
            <li><strong>Your Value:</strong> You must select your Twilio trunk from the dropdown menu.</li>
        </ul>
    </li>
</ul>

<h4>Component B: Dial Patterns</h4>

<p>This tab is where the magic happens. It defines what a valid outbound number looks like and how to reformat it before sending it to the trunk. This was the critical fix for the Invalid phone number error from Twilio.</p>

<p><strong>The Goal:</strong> To take a dialed number like 1XXXXXXXXXX and transform it into +1XXXXXXXXXX.</p>

<p><strong>The Rule:</strong> You will fill out one row in the &#8220;Dial Patterns that will use this Route&#8221; table.</p>

<ul>
    <li><strong>prepend field:</strong> +
        <ul>
            <li><strong>Why it&#8217;s important:</strong> This adds the + character to the beginning of the number, which is required by Twilio for E.164 formatting.</li>
        </ul>
    </li>
    
    <li><strong>prefix field:</strong> (leave blank)
        <ul>
            <li>We are not stripping any digits from what the user dials.</li>
        </ul>
    </li>
    
    <li><strong>match pattern field:</strong> 1NXXNXXXXXX
        <ul>
            <li><strong>Why it&#8217;s important:</strong> This pattern matches numbers that start with 1, followed by a digit from 2-9 (N), followed by any digit (X), and so on, for a total of 11 digits. This ensures that only valid North American numbers are sent to this route, preventing accidental calls to other internal extensions.</li>
        </ul>
    </li>
</ul>

<h4>Final Configuration View:</h4>

<h3>3. Final Step: Apply Config</h3>

<p>After creating or modifying the Outbound Route, you must click the red Apply Config button at the top right of the FreePBX interface. This makes the new rule live. Now, when you dial an 11-digit number from your Yealink phone, FreePBX will find this matching rule, format the number correctly, and send the call to Twilio successfully.</p>

<h3>3. Final Step: Apply Config</h3>

<p>After creating or modifying the Inbound Route, you must click the red Apply Config button at the top right of the FreePBX interface. This makes the new rule live in the system. Once applied, any call to +1XXXXXXXXXX that arrives from the Twilio trunk will be immediately directed to ring extension 101.</p>

<h3>Final Configuration Guide: FreePBX Extension &#038; Yealink Phone</h3>

<p>This document provides the final, working steps to create a PJSIP extension in FreePBX and correctly configure your Yealink T45W phone to register to it through the VPN.</p>

<h3>Part 1: The FreePBX Extension Setup</h3>

<p>This is where you create the &#8220;phone line&#8221; on your PBX.</p>

<h4>1. Navigate to the Extensions Menu</h4>

<p>In your FreePBX web UI, go to Applications -> Extensions.</p>

<h4>2. Create the New Extension</h4>

<ul>
    <li>Click the + Add Extension button.</li>
    <li>From the dropdown, select + Add New PJSIP Extension.</li>
</ul>

<h4>3. Fill in the Extension Details</h4>

<ul>
    <li><strong>User Extension:</strong> Enter the extension number (e.g., 101).</li>
    <li><strong>Display Name:</strong> Enter a descriptive name (e.g., Albert VPN Phone).</li>
    <li><strong>Secret:</strong> Enter the password for the extension. To avoid issues with special characters, it&#8217;s best to use a strong password with only letters and numbers (e.g., TestPassword1234). This is the password you will enter into the phone.</li>
</ul>

<h4>4. Configure Advanced NAT Settings</h4>

<p>Click the Advanced tab for the extension.</p>

<p>Set the following fields to Yes:</p>
<ul>
    <li>Rewrite Contact</li>
    <li>RTP Symmetric</li>
    <li>Force RPort</li>
</ul>

<p>These settings are crucial for ensuring two-way audio works correctly through the VPN and firewall.</p>

<h4>5. Save and Apply</h4>

<ul>
    <li>Click the Submit button at the bottom of the page.</li>
    <li>Click the red Apply Config button that appears at the top right.</li>
</ul>

<h3>Part 2: The Yealink Phone Configuration</h3>

<p>This is where you tell your phone how to log into the extension you just created.</p>

<h4>1. Navigate to the Account Page</h4>

<ul>
    <li>Log into your Yealink phone&#8217;s web UI.</li>
    <li>Click on the Account tab at the top.</li>
    <li>On the left, click on Register, then select Account 1.</li>
</ul>

<h4>2. Enter the Registration Credentials</h4>

<p>Fill out the form using the exact information from the FreePBX extension.</p>

<table>
<tr>
    <th>Yealink Field</th>
    <th>What to Enter</th>
    <th>Explanation</th>
</tr>
<tr>
    <td>Line Active</td>
    <td>ON</td>
    <td>Enables this phone line.</td>
</tr>
<tr>
    <td>Label</td>
    <td>101 &#8211; Albert</td>
    <td>The text that appears on your phone&#8217;s screen.</td>
</tr>
<tr>
    <td>Display Name</td>
    <td>Albert</td>
    <td>Your internal Caller ID name.</td>
</tr>
<tr>
    <td>Register Name</td>
    <td>101</td>
    <td>The &#8220;User Extension&#8221; you set in FreePBX.</td>
</tr>
<tr>
    <td>Username</td>
    <td>101</td>
    <td>Also the &#8220;User Extension&#8221; from FreePBX.</td>
</tr>
<tr>
    <td>Password</td>
    <td>TestPassword1234</td>
    <td>The exact &#8220;Secret&#8221; you set in FreePBX for extension 101.</td>
</tr>
<tr>
    <td>Server Host</td>
    <td>172.18.0.2</td>
    <td>The private IP address of your FreePBX Docker container.</td>
</tr>
</table>

<h4>3. Confirm and Verify</h4>

<ul>
    <li>Scroll to the bottom of the page and click the Confirm button.</li>
    <li>The Register Status at the top of the page should change to &#8220;Registered&#8221;.</li>
    <li>The Yealink phone screen should also show the new label and be ready to make calls.</li>
</ul>

<div class="warning-box">
<p><strong>Note:</strong> Be sure to set the following options to &#8220;NO&#8221; so that you can make the configurations changes.</p>
<p>[Image placeholder: Pasted image 20250623165511.png]</p>
</div>

<h3>FreePBX Voicemail Fix: Resolving Module Conflict</h3>

<p>This guide explains how to resolve the error preventing access to the voicemail system (*97). The issue is caused by a module conflict that stops the main voicemail application from loading.</p>

<h4>Step 1: Edit the Asterisk Modules Configuration File</h4>

<p>Since the option is not available in the web interface, so you will need to disable the conflicting module directly in its configuration file. This requires running a command on your VPS to edit the file inside the Docker container.</p>

<ol>
    <li>On your VPS command line, execute the following command. This will open the Asterisk modules file in the nano text editor.
        <div class="code-block">docker exec -it freepbx nano /etc/asterisk/modules.conf</div>
    </li>
    
    <li>Inside the nano editor, use your arrow keys to scroll down to the section under the [modules] header.</li>
    
    <li>Add the following new line anywhere in the list of noload directives. A good place is right after autoload=yes.
        <div class="code-block">noload = res_mwi_external.so</div>
        <p>This change explicitly tells Asterisk to not load this specific module when it starts, which will prevent the conflict and allow the main app_voicemail module to load correctly.</p>
    </li>
    
    <li>Save the file and exit the editor by pressing Ctrl + X, then Y, and then Enter. You will be returned to your regular VPS command prompt.</li>
</ol>

<h4>Step 2: The Final Restart</h4>

<p>Now You have to perform a full, clean restart of Asterisk to apply this change. The Apply Config button in the GUI is not sufficient for this.</p>

<ol>
    <li>On your VPS command line, run this command:
        <div class="code-block">docker restart freepbx</div>
    </li>
    
    <li>Wait about 60 seconds for the container and all its services to fully restart.</li>
</ol>

<h4>Step 3: Test Your Voicemail</h4>

<ol>
    <li>Pick up your Yealink phone and dial *97.</li>
    <li>This time, the conflicting module will be disabled, app_voicemail will load correctly, and the call will connect to the voicemail system, allowing you to set up your mailbox.</li>
</ol>

</div>

</body>
</html>



<h2 class="wp-block-heading">Cost Breakdown</h2>



<h3 class="wp-block-heading">If Using VPS (for CGNAT bypass):</h3>



<ul class="wp-block-list">
<li><strong>Twilio Phone Number</strong>: ~$1.00/month</li>



<li><strong>Twilio SIP Trunk</strong>: ~$0.0035/min (incoming), ~$0.0085/min (outgoing)</li>



<li><strong>Average monthly usage (400 min)</strong>: ~$2.30</li>



<li><strong>Talkyto Mobile App</strong>: $1.15/month</li>



<li><strong>Total Telephony Cost</strong>: ~$4.45/month</li>



<li><strong>VPS Cost</strong>: $12/month (typical for 2GB RAM VPS)</li>



<li><strong>Total Monthly Cost</strong>: ~$16.45/month</li>
</ul>



<h3 class="wp-block-heading">Alternative (if NO CGNAT):</h3>



<p>If your ISP doesn&#8217;t use CGNAT, you can host FreePBX on a <strong>Raspberry Pi 5</strong> at home:</p>



<ul class="wp-block-list">
<li><strong>One-time hardware cost</strong>: ~$80-100 (Raspberry Pi 5 + accessories)</li>



<li><strong>Monthly telephony costs</strong>: Same $4.45/month</li>



<li><strong>No VPS fees</strong>: Save $12/month</li>



<li><strong>Total Monthly Cost</strong>: Only $4.45/month</li>
</ul>



<p><strong>When to use each setup</strong>:</p>



<ul class="wp-block-list">
<li><strong>Use VPS</strong>: If your ISP uses CGNAT or you need guaranteed uptime</li>



<li><strong>Use Raspberry Pi</strong>: If you have a public IP and reliable home internet</li>
</ul>



<h2 class="wp-block-heading">Troubleshooting Tips</h2>



<h3 class="wp-block-heading">One-Way Audio</h3>



<ul class="wp-block-list">
<li>Check External IP in Asterisk SIP Settings</li>



<li>Verify Local Networks include VPN subnet</li>



<li>Ensure NAT settings on extension are enabled</li>
</ul>



<h3 class="wp-block-heading">Phone Won&#8217;t Register</h3>



<ul class="wp-block-list">
<li>Verify VPN connection is active</li>



<li>Check firewall rules allow traffic</li>



<li>Try factory reset on phone if password won&#8217;t save</li>
</ul>



<h3 class="wp-block-heading">Calls Fail with &#8220;Invalid Number&#8221;</h3>



<ul class="wp-block-list">
<li>Verify outbound route dial pattern</li>



<li>Ensure number includes country code</li>



<li>Check trunk configuration matches Twilio settings</li>
</ul>



<h3 class="wp-block-heading">No Inbound Calls</h3>



<ul class="wp-block-list">
<li>Verify DID number matches exactly (including +)</li>



<li>Check trunk context is set to <code>from-pstn</code></li>



<li>Ensure inbound route is configured</li>
</ul>



<h2 class="wp-block-heading">Security Considerations</h2>



<ol class="wp-block-list">
<li><strong>Change Default Passwords</strong>: Always change the default FreePBX admin password</li>



<li><strong>Firewall Rules</strong>: Only open necessary ports</li>



<li><strong>VPN Security</strong>: Use strong certificates and consider implementing fail2ban</li>



<li><strong>Regular Updates</strong>: Keep your VPS, Docker images, and FreePBX modules updated</li>



<li><strong>Backup Configuration</strong>: Regularly backup your FreePBX data directory</li>
</ol>



<h2 class="wp-block-heading">Bonus: Mobile Access with Talkyto</h2>



<p>One of the best features of using Twilio is the <strong>Talkyto</strong> mobile app (available for iOS and Android). This app provides additional functionality beyond your desk phone:</p>



<h3 class="wp-block-heading">Talkyto Features:</h3>



<ul class="wp-block-list">
<li><strong>Text Messaging</strong>: Send and receive SMS messages using your Twilio number</li>



<li><strong>MMS Support</strong>: Handle image messages and multimedia content</li>



<li><strong>Mobile Calling</strong>: Make outbound calls from your smartphone using your Twilio number</li>



<li><strong>Real-time Notifications</strong>: Get instant alerts for incoming texts and calls</li>



<li><strong>Cross-Platform</strong>: Works on both iOS and Android devices</li>
</ul>



<h3 class="wp-block-heading">Setting Up Talkyto:</h3>



<ol class="wp-block-list">
<li>Download the Talkyto app from your app store</li>



<li>Log in with your Twilio account credentials</li>



<li>Select your phone number from the list</li>



<li>You&#8217;re ready to use your business number on the go!</li>
</ol>



<p>This means you&#8217;re not tied to your desk phone &#8211; you can handle business communications from anywhere, making this solution even more valuable for remote work and travel.</p>



<h2 class="wp-block-heading">Conclusion</h2>



<p>This setup provides a professional VoIP system that bypasses CGNAT restrictions, offers secure remote access, and costs only $4.45/month for phone service (including Talkyto). The combination of VPS hosting, Docker containerization, VPN tunneling, and Twilio&#8217;s reliable SIP trunking creates a robust communication solution suitable for home offices or small businesses.</p>



<p>With the addition of the Talkyto mobile app, you get a complete unified communications system &#8211; desk phone at home/office via VPN, plus mobile access for calls and texts on the go. The initial setup requires some technical knowledge, but once configured, the system is stable and requires minimal maintenance. The ability to use both physical VoIP phones and mobile devices with the same number makes this solution particularly valuable for modern remote work scenarios.</p>



<p>For users without CGNAT restrictions, consider using a Raspberry Pi 5 instead of a VPS to reduce the total monthly cost from ~$16.45 to just $4.45.</p>



<!DOCTYPE html>
<html>
<head>
<style>
.pbx-guide-container {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
    line-height: 1.6;
    color: #333;
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
}

.pbx-guide-container h1 {
    color: #2c3e50;
    border-bottom: 3px solid #3498db;
    padding-bottom: 10px;
    margin-bottom: 30px;
}

.pbx-guide-container h2 {
    color: #34495e;
    margin-top: 40px;
    margin-bottom: 20px;
    padding-left: 10px;
    border-left: 4px solid #3498db;
}

.pbx-guide-container h3 {
    color: #555;
    margin-top: 25px;
    margin-bottom: 15px;
}

.pbx-guide-container h4 {
    color: #666;
    margin-top: 20px;
    margin-bottom: 10px;
}

.pbx-guide-container .code-block {
    background: #f4f4f4;
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 15px;
    margin: 10px 0;
    overflow-x: auto;
    font-family: 'Courier New', Courier, monospace;
    font-size: 12px;
    line-height: 1.4;
    white-space: pre-wrap;
}

.pbx-guide-container .inline-code {
    background: #f0f0f0;
    padding: 2px 6px;
    border-radius: 3px;
    font-family: 'Courier New', Courier, monospace;
    font-size: 14px;
}

.pbx-guide-container .warning-box {
    background: #fff3cd;
    border: 1px solid #ffeaa7;
    border-radius: 4px;
    padding: 15px;
    margin: 20px 0;
}

.pbx-guide-container .info-box {
    background: #d1ecf1;
    border: 1px solid #bee5eb;
    border-radius: 4px;
    padding: 15px;
    margin: 20px 0;
}

.pbx-guide-container .success-box {
    background: #d4edda;
    border: 1px solid #c3e6cb;
    border-radius: 4px;
    padding: 15px;
    margin: 20px 0;
}

.pbx-guide-container .problem-box {
    background: #f8d7da;
    border: 1px solid #f5c6cb;
    border-radius: 4px;
    padding: 15px;
    margin: 20px 0;
}

.pbx-guide-container table {
    border-collapse: collapse;
    width: 100%;
    margin: 20px 0;
}

.pbx-guide-container table th,
.pbx-guide-container table td {
    border: 1px solid #ddd;
    padding: 12px;
    text-align: left;
}

.pbx-guide-container table th {
    background: #f8f9fa;
    font-weight: bold;
}

.pbx-guide-container table tr:nth-child(even) {
    background: #f8f9fa;
}

.pbx-guide-container ul, .pbx-guide-container ol {
    margin: 15px 0;
    padding-left: 30px;
}

.pbx-guide-container li {
    margin-bottom: 8px;
}

.pbx-guide-container .section-box {
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    padding: 20px;
    margin: 20px 0;
    background: #fafafa;
}
</style>
</head>
<body>

<div class="pbx-guide-container">
    <h2>Full IP Tables Configuration</h2>

    <div class="code-block">
root@ubuntu-X-XXXXX-XXX-XXXX-XX:~# sudo iptables-save
# Generated by iptables-save v1.8.7 on Sat Jun 21 20:38:17 2025
*raw
:PREROUTING ACCEPT [18166611:6580173551]
:OUTPUT ACCEPT [441139:110552533]
-A PREROUTING -s 10.8.0.0/24 -d 172.18.0.2/32 -j ACCEPT
-A PREROUTING -d 172.18.0.2/32 ! -i br-XXXXXXXXXXXX -j DROP
COMMIT
# Completed on Sat Jun 21 20:38:17 2025
# Generated by iptables-save v1.8.7 on Sat Jun 21 20:38:17 2025
*filter
:INPUT ACCEPT [384009:168151515]
:FORWARD ACCEPT [2461:828528]
:OUTPUT ACCEPT [441139:110552533]
:DOCKER &#8211; [0:0]
:DOCKER-BRIDGE &#8211; [0:0]
:DOCKER-CT &#8211; [0:0]
:DOCKER-FORWARD &#8211; [0:0]
:DOCKER-ISOLATION-STAGE-1 &#8211; [0:0]
:DOCKER-ISOLATION-STAGE-2 &#8211; [0:0]
:DOCKER-USER &#8211; [0:0]
-A INPUT -p udp -m udp &#8211;dport 1194 -j ACCEPT
-A INPUT -p udp -m udp &#8211;dport 1194 -j ACCEPT
-A INPUT -p udp -m udp &#8211;dport 10000:20000 -j ACCEPT
-A FORWARD -j DOCKER-USER
-A FORWARD -j DOCKER-ISOLATION-STAGE-1
-A FORWARD -o docker0 -m conntrack &#8211;ctstate RELATED,ESTABLISHED -j ACCEPT
-A FORWARD -o br-XXXXXXXXXXXX -m conntrack &#8211;ctstate RELATED,ESTABLISHED -j ACCEPT
-A FORWARD -i docker0 ! -o docker0 -j ACCEPT
-A FORWARD -i br-XXXXXXXXXXXX ! -o br-XXXXXXXXXXXX -j ACCEPT
-A FORWARD -i docker0 -o docker0 -j ACCEPT
-A DOCKER -d 172.18.0.2/32 ! -i br-XXXXXXXXXXXX -o br-XXXXXXXXXXXX -p udp -m udp &#8211;dport 18100 -j ACCEPT
-A DOCKER -d 172.18.0.2/32 ! -i br-XXXXXXXXXXXX -o br-XXXXXXXXXXXX -p udp -m udp &#8211;dport 18099 -j ACCEPT
-A DOCKER -d 172.18.0.2/32 ! -i br-XXXXXXXXXXXX -o br-XXXXXXXXXXXX -p udp -m udp &#8211;dport 18098 -j ACCEPT
-A DOCKER -d 172.18.0.2/32 ! -i br-XXXXXXXXXXXX -o br-XXXXXXXXXXXX -p udp -m udp &#8211;dport 18097 -j ACCEPT
-A DOCKER -d 172.18.0.2/32 ! -i br-XXXXXXXXXXXX -o br-XXXXXXXXXXXX -p udp -m udp &#8211;dport 18096 -j ACCEPT
-A DOCKER -d 172.18.0.2/32 ! -i br-XXXXXXXXXXXX -o br-XXXXXXXXXXXX -p udp -m udp &#8211;dport 18095 -j ACCEPT
-A DOCKER -d 172.18.0.2/32 ! -i br-XXXXXXXXXXXX -o br-XXXXXXXXXXXX -p udp -m udp &#8211;dport 18094 -j ACCEPT
-A DOCKER -d 172.18.0.2/32 ! -i br-XXXXXXXXXXXX -o br-XXXXXXXXXXXX -p udp -m udp &#8211;dport 18093 -j ACCEPT
-A DOCKER -d 172.18.0.2/32 ! -i br-XXXXXXXXXXXX -o br-XXXXXXXXXXXX -p udp -m udp &#8211;dport 18092 -j ACCEPT
-A DOCKER -d 172.18.0.2/32 ! -i br-XXXXXXXXXXXX -o br-XXXXXXXXXXXX -p udp -m udp &#8211;dport 18091 -j ACCEPT
-A DOCKER -d 172.18.0.2/32 ! -i br-XXXXXXXXXXXX -o br-XXXXXXXXXXXX -p udp -m udp &#8211;dport 18090 -j ACCEPT
-A DOCKER -d 172.18.0.2/32 ! -i br-XXXXXXXXXXXX -o br-XXXXXXXXXXXX -p udp -m udp &#8211;dport 18089 -j ACCEPT
-A DOCKER -d 172.18.0.2/32 ! -i br-XXXXXXXXXXXX -o br-XXXXXXXXXXXX -p udp -m udp &#8211;dport 18088 -j ACCEPT
-A DOCKER -d 172.18.0.2/32 ! -i br-XXXXXXXXXXXX -o br-XXXXXXXXXXXX -p udp -m udp &#8211;dport 18087 -j ACCEPT
-A DOCKER -d 172.18.0.2/32 ! -i br-XXXXXXXXXXXX -o br-XXXXXXXXXXXX -p udp -m udp &#8211;dport 18086 -j ACCEPT
-A DOCKER -d 172.18.0.2/32 ! -i br-XXXXXXXXXXXX -o br-XXXXXXXXXXXX -p udp -m udp &#8211;dport 18085 -j ACCEPT
-A DOCKER -d 172.18.0.2/32 ! -i br-XXXXXXXXXXXX -o br-XXXXXXXXXXXX -p udp -m udp &#8211;dport 18084 -j ACCEPT
-A DOCKER -d 172.18.0.2/32 ! -i br-XXXXXXXXXXXX -o br-XXXXXXXXXXXX -p udp -m udp &#8211;dport 18083 -j ACCEPT
-A DOCKER -d 172.18.0.2/32 ! -i br-XXXXXXXXXXXX -o br-XXXXXXXXXXXX -p udp -m udp &#8211;dport 18082 -j ACCEPT
-A DOCKER -d 172.18.0.2/32 ! -i br-XXXXXXXXXXXX -o br-XXXXXXXXXXXX -p udp -m udp &#8211;dport 18081 -j ACCEPT
-A DOCKER -d 172.18.0.2/32 ! -i br-XXXXXXXXXXXX -o br-XXXXXXXXXXXX -p udp -m udp &#8211;dport 18080 -j ACCEPT
-A DOCKER -d 172.18.0.2/32 ! -i br-XXXXXXXXXXXX -o br-XXXXXXXXXXXX -p udp -m udp &#8211;dport 18079 -j ACCEPT
-A DOCKER -d 172.18.0.2/32 ! -i br-XXXXXXXXXXXX -o br-XXXXXXXXXXXX -p udp -m udp &#8211;dport 18078 -j ACCEPT
-A DOCKER -d 172.18.0.2/32 ! -i br-XXXXXXXXXXXX -o br-XXXXXXXXXXXX -p udp -m udp &#8211;dport 18077 -j ACCEPT
-A DOCKER -d 172.18.0.2/32 ! -i br-XXXXXXXXXXXX -o br-XXXXXXXXXXXX -p udp -m udp &#8211;dport 18076 -j ACCEPT
-A DOCKER -d 172.18.0.2/32 ! -i br-XXXXXXXXXXXX -o br-XXXXXXXXXXXX -p udp -m udp &#8211;dport 18075 -j ACCEPT
-A DOCKER -d 172.18.0.2/32 ! -i br-XXXXXXXXXXXX -o br-XXXXXXXXXXXX -p udp -m udp &#8211;dport 18074 -j ACCEPT
-A DOCKER -d 172.18.0.2/32 ! -i br-XXXXXXXXXXXX -o br-XXXXXXXXXXXX -p udp -m udp &#8211;dport 18073 -j ACCEPT
-A DOCKER -d 172.18.0.2/32 ! -i br-XXXXXXXXXXXX -o br-XXXXXXXXXXXX -p udp -m udp &#8211;dport 18072 -j ACCEPT
-A DOCKER -d 172.18.0.2/32 ! -i br-XXXXXXXXXXXX -o br-XXXXXXXXXXXX -p udp -m udp &#8211;dport 18071 -j ACCEPT
-A DOCKER -d 172.18.0.2/32 ! -i br-XXXXXXXXXXXX -o br-XXXXXXXXXXXX -p udp -m udp &#8211;dport 18070 -j ACCEPT
-A DOCKER -d 172.18.0.2/32 ! -i br-XXXXXXXXXXXX -o br-XXXXXXXXXXXX -p udp -m udp &#8211;dport 18069 -j ACCEPT
-A DOCKER -d 172.18.0.2/32 ! -i br-XXXXXXXXXXXX -o br-XXXXXXXXXXXX -p udp -m udp &#8211;dport 18068 -j ACCEPT
-A DOCKER -d 172.18.0.2/32 ! -i br-XXXXXXXXXXXX -o br-XXXXXXXXXXXX -p udp -m udp &#8211;dport 18067 -j ACCEPT
-A DOCKER -d 172.18.0.2/32 ! -i br-XXXXXXXXXXXX -o br-XXXXXXXXXXXX -p udp -m udp &#8211;dport 18066 -j ACCEPT
-A DOCKER -d 172.18.0.2/32 ! -i br-XXXXXXXXXXXX -o br-XXXXXXXXXXXX -p udp -m udp &#8211;dport 18065 -j ACCEPT
-A DOCKER -d 172.18.0.2/32 ! -i br-XXXXXXXXXXXX -o br-XXXXXXXXXXXX -p udp -m udp &#8211;dport 18064 -j ACCEPT
-A DOCKER -d 172.18.0.2/32 ! -i br-XXXXXXXXXXXX -o br-XXXXXXXXXXXX -p udp -m udp &#8211;dport 18063 -j ACCEPT
-A DOCKER -d 172.18.0.2/32 ! -i br-XXXXXXXXXXXX -o br-XXXXXXXXXXXX -p udp -m udp &#8211;dport 18062 -j ACCEPT
-A DOCKER -d 172.18.0.2/32 ! -i br-XXXXXXXXXXXX -o br-XXXXXXXXXXXX -p udp -m udp &#8211;dport 18061 -j ACCEPT
-A DOCKER -d 172.18.0.2/32 ! -i br-XXXXXXXXXXXX -o br-XXXXXXXXXXXX -p udp -m udp &#8211;dport 18060 -j ACCEPT
-A DOCKER -d 172.18.0.2/32 ! -i br-XXXXXXXXXXXX -o br-XXXXXXXXXXXX -p udp -m udp &#8211;dport 18059 -j ACCEPT
-A DOCKER -d 172.18.0.2/32 ! -i br-XXXXXXXXXXXX -o br-XXXXXXXXXXXX -p udp -m udp &#8211;dport 18058 -j ACCEPT
-A DOCKER -d 172.18.0.2/32 ! -i br-XXXXXXXXXXXX -o br-XXXXXXXXXXXX -p udp -m udp &#8211;dport 18057 -j ACCEPT
-A DOCKER -d 172.18.0.2/32 ! -i br-XXXXXXXXXXXX -o br-XXXXXXXXXXXX -p udp -m udp &#8211;dport 18056 -j ACCEPT
-A DOCKER -d 172.18.0.2/32 ! -i br-XXXXXXXXXXXX -o br-XXXXXXXXXXXX -p udp -m udp &#8211;dport 18055 -j ACCEPT
-A DOCKER -d 172.18.0.2/32 ! -i br-XXXXXXXXXXXX -o br-XXXXXXXXXXXX -p udp -m udp &#8211;dport 18054 -j ACCEPT
-A DOCKER -d 172.18.0.2/32 ! -i br-XXXXXXXXXXXX -o br-XXXXXXXXXXXX -p udp -m udp &#8211;dport 18053 -j ACCEPT
-A DOCKER -d 172.18.0.2/32 ! -i br-XXXXXXXXXXXX -o br-XXXXXXXXXXXX -p udp -m udp &#8211;dport 18052 -j ACCEPT
-A DOCKER -d 172.18.0.2/32 ! -i br-XXXXXXXXXXXX -o br-XXXXXXXXXXXX -p udp -m udp &#8211;dport 18051 -j ACCEPT
-A DOCKER -d 172.18.0.2/32 ! -i br-XXXXXXXXXXXX -o br-XXXXXXXXXXXX -p udp -m udp &#8211;dport 18050 -j ACCEPT
-A DOCKER -d 172.18.0.2/32 ! -i br-XXXXXXXXXXXX -o br-XXXXXXXXXXXX -p udp -m udp &#8211;dport 18049 -j ACCEPT
-A DOCKER -d 172.18.0.2/32 ! -i br-XXXXXXXXXXXX -o br-XXXXXXXXXXXX -p udp -m udp &#8211;dport 18048 -j ACCEPT
-A DOCKER -d 172.18.0.2/32 ! -i br-XXXXXXXXXXXX -o br-XXXXXXXXXXXX -p udp -m udp &#8211;dport 18047 -j ACCEPT
-A DOCKER -d 172.18.0.2/32 ! -i br-XXXXXXXXXXXX -o br-XXXXXXXXXXXX -p udp -m udp &#8211;dport 18046 -j ACCEPT
-A DOCKER -d 172.18.0.2/32 ! -i br-XXXXXXXXXXXX -o br-XXXXXXXXXXXX -p udp -m udp &#8211;dport 18045 -j ACCEPT
-A DOCKER -d 172.18.0.2/32 ! -i br-XXXXXXXXXXXX -o br-XXXXXXXXXXXX -p udp -m udp &#8211;dport 18044 -j ACCEPT
-A DOCKER -d 172.18.0.2/32 ! -i br-XXXXXXXXXXXX -o br-XXXXXXXXXXXX -p udp -m udp &#8211;dport 18043 -j ACCEPT
-A DOCKER -d 172.18.0.2/32 ! -i br-XXXXXXXXXXXX -o br-XXXXXXXXXXXX -p udp -m udp &#8211;dport 18042 -j ACCEPT
-A DOCKER -d 172.18.0.2/32 ! -i br-XXXXXXXXXXXX -o br-XXXXXXXXXXXX -p udp -m udp &#8211;dport 18041 -j ACCEPT
-A DOCKER -d 172.18.0.2/32 ! -i br-XXXXXXXXXXXX -o br-XXXXXXXXXXXX -p udp -m udp &#8211;dport 18040 -j ACCEPT
-A DOCKER -d 172.18.0.2/32 ! -i br-XXXXXXXXXXXX -o br-XXXXXXXXXXXX -p udp -m udp &#8211;dport 18039 -j ACCEPT
-A DOCKER -d 172.18.0.2/32 ! -i br-XXXXXXXXXXXX -o br-XXXXXXXXXXXX -p udp -m udp &#8211;dport 18038 -j ACCEPT
-A DOCKER -d 172.18.0.2/32 ! -i br-XXXXXXXXXXXX -o br-XXXXXXXXXXXX -p udp -m udp &#8211;dport 18037 -j ACCEPT
-A DOCKER -d 172.18.0.2/32 ! -i br-XXXXXXXXXXXX -o br-XXXXXXXXXXXX -p udp -m udp &#8211;dport 18036 -j ACCEPT
-A DOCKER -d 172.18.0.2/32 ! -i br-XXXXXXXXXXXX -o br-XXXXXXXXXXXX -p udp -m udp &#8211;dport 18035 -j ACCEPT
-A DOCKER -d 172.18.0.2/32 ! -i br-XXXXXXXXXXXX -o br-XXXXXXXXXXXX -p udp -m udp &#8211;dport 18034 -j ACCEPT
-A DOCKER -d 172.18.0.2/32 ! -i br-XXXXXXXXXXXX -o br-XXXXXXXXXXXX -p udp -m udp &#8211;dport 18033 -j ACCEPT
-A DOCKER -d 172.18.0.2/32 ! -i br-XXXXXXXXXXXX -o br-XXXXXXXXXXXX -p udp -m udp &#8211;dport 18032 -j ACCEPT
-A DOCKER -d 172.18.0.2/32 ! -i br-XXXXXXXXXXXX -o br-XXXXXXXXXXXX -p udp -m udp &#8211;dport 18031 -j ACCEPT
-A DOCKER -d 172.18.0.2/32 ! -i br-XXXXXXXXXXXX -o br-XXXXXXXXXXXX -p udp -m udp &#8211;dport 18030 -j ACCEPT
-A DOCKER -d 172.18.0.2/32 ! -i br-XXXXXXXXXXXX -o br-XXXXXXXXXXXX -p udp -m udp &#8211;dport 18029 -j ACCEPT
-A DOCKER -d 172.18.0.2/32 ! -i br-XXXXXXXXXXXX -o br-XXXXXXXXXXXX -p udp -m udp &#8211;dport 18028 -j ACCEPT
-A DOCKER -d 172.18.0.2/32 ! -i br-XXXXXXXXXXXX -o br-XXXXXXXXXXXX -p udp -m udp &#8211;dport 18027 -j ACCEPT
-A DOCKER -d 172.18.0.2/32 ! -i br-XXXXXXXXXXXX -o br-XXXXXXXXXXXX -p udp -m udp &#8211;dport 18026 -j ACCEPT
-A DOCKER -d 172.18.0.2/32 ! -i br-XXXXXXXXXXXX -o br-XXXXXXXXXXXX -p udp -m udp &#8211;dport 18025 -j ACCEPT
-A DOCKER -d 172.18.0.2/32 ! -i br-XXXXXXXXXXXX -o br-XXXXXXXXXXXX -p udp -m udp &#8211;dport 18024 -j ACCEPT
-A DOCKER -d 172.18.0.2/32 ! -i br-XXXXXXXXXXXX -o br-XXXXXXXXXXXX -p udp -m udp &#8211;dport 18023 -j ACCEPT
-A DOCKER -d 172.18.0.2/32 ! -i br-XXXXXXXXXXXX -o br-XXXXXXXXXXXX -p udp -m udp &#8211;dport 18022 -j ACCEPT
-A DOCKER -d 172.18.0.2/32 ! -i br-XXXXXXXXXXXX -o br-XXXXXXXXXXXX -p udp -m udp &#8211;dport 18021 -j ACCEPT
-A DOCKER -d 172.18.0.2/32 ! -i br-XXXXXXXXXXXX -o br-XXXXXXXXXXXX -p udp -m udp &#8211;dport 18020 -j ACCEPT
-A DOCKER -d 172.18.0.2/32 ! -i br-XXXXXXXXXXXX -o br-XXXXXXXXXXXX -p udp -m udp &#8211;dport 18019 -j ACCEPT
-A DOCKER -d 172.18.0.2/32 ! -i br-XXXXXXXXXXXX -o br-XXXXXXXXXXXX -p udp -m udp &#8211;dport 18018 -j ACCEPT
-A DOCKER -d 172.18.0.2/32 ! -i br-XXXXXXXXXXXX -o br-XXXXXXXXXXXX -p udp -m udp &#8211;dport 18017 -j ACCEPT
-A DOCKER -d 172.18.0.2/32 ! -i br-XXXXXXXXXXXX -o br-XXXXXXXXXXXX -p udp -m udp &#8211;dport 18016 -j ACCEPT
-A DOCKER -d 172.18.0.2/32 ! -i br-XXXXXXXXXXXX -o br-XXXXXXXXXXXX -p udp -m udp &#8211;dport 18015 -j ACCEPT
-A DOCKER -d 172.18.0.2/32 ! -i br-XXXXXXXXXXXX -o br-XXXXXXXXXXXX -p udp -m udp &#8211;dport 18014 -j ACCEPT
-A DOCKER -d 172.18.0.2/32 ! -i br-XXXXXXXXXXXX -o br-XXXXXXXXXXXX -p udp -m udp &#8211;dport 18013 -j ACCEPT
-A DOCKER -d 172.18.0.2/32 ! -i br-XXXXXXXXXXXX -o br-XXXXXXXXXXXX -p udp -m udp &#8211;dport 18012 -j ACCEPT
-A DOCKER -d 172.18.0.2/32 ! -i br-XXXXXXXXXXXX -o br-XXXXXXXXXXXX -p udp -m udp &#8211;dport 18011 -j ACCEPT
-A DOCKER -d 172.18.0.2/32 ! -i br-XXXXXXXXXXXX -o br-XXXXXXXXXXXX -p udp -m udp &#8211;dport 18010 -j ACCEPT
-A DOCKER -d 172.18.0.2/32 ! -i br-XXXXXXXXXXXX -o br-XXXXXXXXXXXX -p udp -m udp &#8211;dport 18009 -j ACCEPT
-A DOCKER -d 172.18.0.2/32 ! -i br-XXXXXXXXXXXX -o br-XXXXXXXXXXXX -p udp -m udp &#8211;dport 18008 -j ACCEPT
-A DOCKER -d 172.18.0.2/32 ! -i br-XXXXXXXXXXXX -o br-XXXXXXXXXXXX -p udp -m udp &#8211;dport 18007 -j ACCEPT
-A DOCKER -d 172.18.0.2/32 ! -i br-XXXXXXXXXXXX -o br-XXXXXXXXXXXX -p udp -m udp &#8211;dport 18006 -j ACCEPT
-A DOCKER -d 172.18.0.2/32 ! -i br-XXXXXXXXXXXX -o br-XXXXXXXXXXXX -p udp -m udp &#8211;dport 18005 -j ACCEPT
-A DOCKER -d 172.18.0.2/32 ! -i br-XXXXXXXXXXXX -o br-XXXXXXXXXXXX -p udp -m udp &#8211;dport 18004 -j ACCEPT
-A DOCKER -d 172.18.0.2/32 ! -i br-XXXXXXXXXXXX -o br-XXXXXXXXXXXX -p udp -m udp &#8211;dport 18003 -j ACCEPT
-A DOCKER -d 172.18.0.2/32 ! -i br-XXXXXXXXXXXX -o br-XXXXXXXXXXXX -p udp -m udp &#8211;dport 18002 -j ACCEPT
-A DOCKER -d 172.18.0.2/32 ! -i br-XXXXXXXXXXXX -o br-XXXXXXXXXXXX -p udp -m udp &#8211;dport 18001 -j ACCEPT
-A DOCKER -d 172.18.0.2/32 ! -i br-XXXXXXXXXXXX -o br-XXXXXXXXXXXX -p udp -m udp &#8211;dport 18000 -j ACCEPT
-A DOCKER -d 172.18.0.2/32 ! -i br-XXXXXXXXXXXX -o br-XXXXXXXXXXXX -p udp -m udp &#8211;dport 5160 -j ACCEPT
-A DOCKER -d 172.18.0.2/32 ! -i br-XXXXXXXXXXXX -o br-XXXXXXXXXXXX -p udp -m udp &#8211;dport 5060 -j ACCEPT
-A DOCKER -d 172.18.0.2/32 ! -i br-XXXXXXXXXXXX -o br-XXXXXXXXXXXX -p tcp -m tcp &#8211;dport 443 -j ACCEPT
-A DOCKER -d 172.18.0.2/32 ! -i br-XXXXXXXXXXXX -o br-XXXXXXXXXXXX -p tcp -m tcp &#8211;dport 80 -j ACCEPT
-A DOCKER ! -i br-XXXXXXXXXXXX -o br-XXXXXXXXXXXX -j DROP
-A DOCKER ! -i docker0 -o docker0 -j DROP
-A DOCKER-BRIDGE -o br-XXXXXXXXXXXX -j DOCKER
-A DOCKER-BRIDGE -o docker0 -j DOCKER
-A DOCKER-CT -o br-XXXXXXXXXXXX -m conntrack &#8211;ctstate RELATED,ESTABLISHED -j ACCEPT
-A DOCKER-CT -o docker0 -m conntrack &#8211;ctstate RELATED,ESTABLISHED -j ACCEPT
-A DOCKER-FORWARD -j DOCKER-CT
-A DOCKER-FORWARD -j DOCKER-ISOLATION-STAGE-1
-A DOCKER-FORWARD -j DOCKER-BRIDGE
-A DOCKER-FORWARD -i br-XXXXXXXXXXXX -j ACCEPT
-A DOCKER-FORWARD -i docker0 -j ACCEPT
-A DOCKER-ISOLATION-STAGE-1 -i br-XXXXXXXXXXXX ! -o br-XXXXXXXXXXXX -j DOCKER-ISOLATION-STAGE-2
-A DOCKER-ISOLATION-STAGE-1 -i docker0 ! -o docker0 -j DOCKER-ISOLATION-STAGE-2
-A DOCKER-ISOLATION-STAGE-2 -o docker0 -j DROP
-A DOCKER-ISOLATION-STAGE-2 -o br-XXXXXXXXXXXX -j DROP
-A DOCKER-USER -i tun0 -o br-XXXXXXXXXXXX -j ACCEPT
-A DOCKER-USER -i br-XXXXXXXXXXXX -o tun0 -j ACCEPT
COMMIT
# Completed on Sat Jun 21 20:38:17 2025
# Generated by iptables-save v1.8.7 on Sat Jun 21 20:38:17 2025
*nat
:PREROUTING ACCEPT [63527:4995166]
:INPUT ACCEPT [58610:3392491]
:OUTPUT ACCEPT [38949:2683331]
:POSTROUTING ACCEPT [40992:3373012]
:DOCKER &#8211; [0:0]
-A PREROUTING -m addrtype &#8211;dst-type LOCAL -j DOCKER
-A OUTPUT ! -d 127.0.0.0/8 -m addrtype &#8211;dst-type LOCAL -j DOCKER
-A POSTROUTING -s 172.18.0.0/16 ! -o br-XXXXXXXXXXXX -j MASQUERADE
-A POSTROUTING -s 10.8.0.0/24 -o eth0 -j MASQUERADE
-A DOCKER -i docker0 -j RETURN
-A DOCKER -i br-XXXXXXXXXXXX -j RETURN
-A DOCKER ! -i br-XXXXXXXXXXXX -p tcp -m tcp &#8211;dport 8080 -j DNAT &#8211;to-destination 172.18.0.2:80
-A DOCKER ! -i br-XXXXXXXXXXXX -p tcp -m tcp &#8211;dport 8443 -j DNAT &#8211;to-destination 172.18.0.2:443
-A DOCKER ! -i br-XXXXXXXXXXXX -p udp -m udp &#8211;dport 5060 -j DNAT &#8211;to-destination 172.18.0.2:5060
-A DOCKER ! -i br-XXXXXXXXXXXX -p udp -m udp &#8211;dport 5160 -j DNAT &#8211;to-destination 172.18.0.2:5160
-A DOCKER ! -i br-XXXXXXXXXXXX -p udp -m udp &#8211;dport 18000 -j DNAT &#8211;to-destination 172.18.0.2:18000
-A DOCKER ! -i br-XXXXXXXXXXXX -p udp -m udp &#8211;dport 18001 -j DNAT &#8211;to-destination 172.18.0.2:18001
-A DOCKER ! -i br-XXXXXXXXXXXX -p udp -m udp &#8211;dport 18002 -j DNAT &#8211;to-destination 172.18.0.2:18002
-A DOCKER ! -i br-XXXXXXXXXXXX -p udp -m udp &#8211;dport 18003 -j DNAT &#8211;to-destination 172.18.0.2:18003
-A DOCKER ! -i br-XXXXXXXXXXXX -p udp -m udp &#8211;dport 18004 -j DNAT &#8211;to-destination 172.18.0.2:18004
-A DOCKER ! -i br-XXXXXXXXXXXX -p udp -m udp &#8211;dport 18005 -j DNAT &#8211;to-destination 172.18.0.2:18005
-A DOCKER ! -i br-XXXXXXXXXXXX -p udp -m udp &#8211;dport 18006 -j DNAT &#8211;to-destination 172.18.0.2:18006
-A DOCKER ! -i br-XXXXXXXXXXXX -p udp -m udp &#8211;dport 18007 -j DNAT &#8211;to-destination 172.18.0.2:18007
-A DOCKER ! -i br-XXXXXXXXXXXX -p udp -m udp &#8211;dport 18008 -j DNAT &#8211;to-destination 172.18.0.2:18008
-A DOCKER ! -i br-XXXXXXXXXXXX -p udp -m udp &#8211;dport 18009 -j DNAT &#8211;to-destination 172.18.0.2:18009
-A DOCKER ! -i br-XXXXXXXXXXXX -p udp -m udp &#8211;dport 18010 -j DNAT &#8211;to-destination 172.18.0.2:18010
-A DOCKER ! -i br-XXXXXXXXXXXX -p udp -m udp &#8211;dport 18011 -j DNAT &#8211;to-destination 172.18.0.2:18011
-A DOCKER ! -i br-XXXXXXXXXXXX -p udp -m udp &#8211;dport 18012 -j DNAT &#8211;to-destination 172.18.0.2:18012
-A DOCKER ! -i br-XXXXXXXXXXXX -p udp -m udp &#8211;dport 18013 -j DNAT &#8211;to-destination 172.18.0.2:18013
-A DOCKER ! -i br-XXXXXXXXXXXX -p udp -m udp &#8211;dport 18014 -j DNAT &#8211;to-destination 172.18.0.2:18014
-A DOCKER ! -i br-XXXXXXXXXXXX -p udp -m udp &#8211;dport 18015 -j DNAT &#8211;to-destination 172.18.0.2:18015
-A DOCKER ! -i br-XXXXXXXXXXXX -p udp -m udp &#8211;dport 18016 -j DNAT &#8211;to-destination 172.18.0.2:18016
-A DOCKER ! -i br-XXXXXXXXXXXX -p udp -m udp &#8211;dport 18017 -j DNAT &#8211;to-destination 172.18.0.2:18017
-A DOCKER ! -i br-XXXXXXXXXXXX -p udp -m udp &#8211;dport 18018 -j DNAT &#8211;to-destination 172.18.0.2:18018
-A DOCKER ! -i br-XXXXXXXXXXXX -p udp -m udp &#8211;dport 18019 -j DNAT &#8211;to-destination 172.18.0.2:18019
-A DOCKER ! -i br-XXXXXXXXXXXX -p udp -m udp &#8211;dport 18020 -j DNAT &#8211;to-destination 172.18.0.2:18020
-A DOCKER ! -i br-XXXXXXXXXXXX -p udp -m udp &#8211;dport 18021 -j DNAT &#8211;to-destination 172.18.0.2:18021
-A DOCKER ! -i br-XXXXXXXXXXXX -p udp -m udp &#8211;dport 18022 -j DNAT &#8211;to-destination 172.18.0.2:18022
-A DOCKER ! -i br-XXXXXXXXXXXX -p udp -m udp &#8211;dport 18023 -j DNAT &#8211;to-destination 172.18.0.2:18023
-A DOCKER ! -i br-XXXXXXXXXXXX -p udp -m udp &#8211;dport 18024 -j DNAT &#8211;to-destination 172.18.0.2:18024
-A DOCKER ! -i br-XXXXXXXXXXXX -p udp -m udp &#8211;dport 18025 -j DNAT &#8211;to-destination 172.18.0.2:18025
-A DOCKER ! -i br-XXXXXXXXXXXX -p udp -m udp &#8211;dport 18026 -j DNAT &#8211;to-destination 172.18.0.2:18026
-A DOCKER ! -i br-XXXXXXXXXXXX -p udp -m udp &#8211;dport 18027 -j DNAT &#8211;to-destination 172.18.0.2:18027
-A DOCKER ! -i br-XXXXXXXXXXXX -p udp -m udp &#8211;dport 18028 -j DNAT &#8211;to-destination 172.18.0.2:18028
-A DOCKER ! -i br-XXXXXXXXXXXX -p udp -m udp &#8211;dport 18029 -j DNAT &#8211;to-destination 172.18.0.2:18029
-A DOCKER ! -i br-XXXXXXXXXXXX -p udp -m udp &#8211;dport 18030 -j DNAT &#8211;to-destination 172.18.0.2:18030
-A DOCKER ! -i br-XXXXXXXXXXXX -p udp -m udp &#8211;dport 18031 -j DNAT &#8211;to-destination 172.18.0.2:18031
-A DOCKER ! -i br-XXXXXXXXXXXX -p udp -m udp &#8211;dport 18032 -j DNAT &#8211;to-destination 172.18.0.2:18032
-A DOCKER ! -i br-XXXXXXXXXXXX -p udp -m udp &#8211;dport 18033 -j DNAT &#8211;to-destination 172.18.0.2:18033
-A DOCKER ! -i br-XXXXXXXXXXXX -p udp -m udp &#8211;dport 18034 -j DNAT &#8211;to-destination 172.18.0.2:18034
-A DOCKER ! -i br-XXXXXXXXXXXX -p udp -m udp &#8211;dport 18035 -j DNAT &#8211;to-destination 172.18.0.2:18035
-A DOCKER ! -i br-XXXXXXXXXXXX -p udp -m udp &#8211;dport 18036 -j DNAT &#8211;to-destination 172.18.0.2:18036
-A DOCKER ! -i br-XXXXXXXXXXXX -p udp -m udp &#8211;dport 18037 -j DNAT &#8211;to-destination 172.18.0.2:18037
-A DOCKER ! -i br-XXXXXXXXXXXX -p udp -m udp &#8211;dport 18038 -j DNAT &#8211;to-destination 172.18.0.2:18038
-A DOCKER ! -i br-XXXXXXXXXXXX -p udp -m udp &#8211;dport 18039 -j DNAT &#8211;to-destination 172.18.0.2:18039
-A DOCKER ! -i br-XXXXXXXXXXXX -p udp -m udp &#8211;dport 18040 -j DNAT &#8211;to-destination 172.18.0.2:18040
-A DOCKER ! -i br-XXXXXXXXXXXX -p udp -m udp &#8211;dport 18041 -j DNAT &#8211;to-destination 172.18.0.2:18041
-A DOCKER ! -i br-XXXXXXXXXXXX -p udp -m udp &#8211;dport 18042 -j DNAT &#8211;to-destination 172.18.0.2:18042
-A DOCKER ! -i br-XXXXXXXXXXXX -p udp -m udp &#8211;dport 18043 -j DNAT &#8211;to-destination 172.18.0.2:18043
-A DOCKER ! -i br-XXXXXXXXXXXX -p udp -m udp &#8211;dport 18044 -j DNAT &#8211;to-destination 172.18.0.2:18044
-A DOCKER ! -i br-XXXXXXXXXXXX -p udp -m udp &#8211;dport 18045 -j DNAT &#8211;to-destination 172.18.0.2:18045
-A DOCKER ! -i br-XXXXXXXXXXXX -p udp -m udp &#8211;dport 18046 -j DNAT &#8211;to-destination 172.18.0.2:18046
-A DOCKER ! -i br-XXXXXXXXXXXX -p udp -m udp &#8211;dport 18047 -j DNAT &#8211;to-destination 172.18.0.2:18047
-A DOCKER ! -i br-XXXXXXXXXXXX -p udp -m udp &#8211;dport 18048 -j DNAT &#8211;to-destination 172.18.0.2:18048
-A DOCKER ! -i br-XXXXXXXXXXXX -p udp -m udp &#8211;dport 18049 -j DNAT &#8211;to-destination 172.18.0.2:18049
-A DOCKER ! -i br-XXXXXXXXXXXX -p udp -m udp &#8211;dport 18050 -j DNAT &#8211;to-destination 172.18.0.2:18050
-A DOCKER ! -i br-XXXXXXXXXXXX -p udp -m udp &#8211;dport 18051 -j DNAT &#8211;to-destination 172.18.0.2:18051
-A DOCKER ! -i br-XXXXXXXXXXXX -p udp -m udp &#8211;dport 18052 -j DNAT &#8211;to-destination 172.18.0.2:18052
-A DOCKER ! -i br-XXXXXXXXXXXX -p udp -m udp &#8211;dport 18053 -j DNAT &#8211;to-destination 172.18.0.2:18053
-A DOCKER ! -i br-XXXXXXXXXXXX -p udp -m udp &#8211;dport 18054 -j DNAT &#8211;to-destination 172.18.0.2:18054
-A DOCKER ! -i br-XXXXXXXXXXXX -p udp -m udp &#8211;dport 18055 -j DNAT &#8211;to-destination 172.18.0.2:18055
-A DOCKER ! -i br-XXXXXXXXXXXX -p udp -m udp &#8211;dport 18056 -j DNAT &#8211;to-destination 172.18.0.2:18056
-A DOCKER ! -i br-XXXXXXXXXXXX -p udp -m udp &#8211;dport 18057 -j DNAT &#8211;to-destination 172.18.0.2:18057
-A DOCKER ! -i br-XXXXXXXXXXXX -p udp -m udp &#8211;dport 18058 -j DNAT &#8211;to-destination 172.18.0.2:18058
-A DOCKER ! -i br-XXXXXXXXXXXX -p udp -m udp &#8211;dport 18059 -j DNAT &#8211;to-destination 172.18.0.2:18059
-A DOCKER ! -i br-XXXXXXXXXXXX -p udp -m udp &#8211;dport 18060 -j DNAT &#8211;to-destination 172.18.0.2:18060
-A DOCKER ! -i br-XXXXXXXXXXXX -p udp -m udp &#8211;dport 18061 -j DNAT &#8211;to-destination 172.18.0.2:18061
-A DOCKER ! -i br-XXXXXXXXXXXX -p udp -m udp &#8211;dport 18062 -j DNAT &#8211;to-destination 172.18.0.2:18062
-A DOCKER ! -i br-XXXXXXXXXXXX -p udp -m udp &#8211;dport 18063 -j DNAT &#8211;to-destination 172.18.0.2:18063
-A DOCKER ! -i br-XXXXXXXXXXXX -p udp -m udp &#8211;dport 18064 -j DNAT &#8211;to-destination 172.18.0.2:18064
-A DOCKER ! -i br-XXXXXXXXXXXX -p udp -m udp &#8211;dport 18065 -j DNAT &#8211;to-destination 172.18.0.2:18065
-A DOCKER ! -i br-XXXXXXXXXXXX -p udp -m udp &#8211;dport 18066 -j DNAT &#8211;to-destination 172.18.0.2:18066
-A DOCKER ! -i br-XXXXXXXXXXXX -p udp -m udp &#8211;dport 18067 -j DNAT &#8211;to-destination 172.18.0.2:18067
-A DOCKER ! -i br-XXXXXXXXXXXX -p udp -m udp &#8211;dport 18068 -j DNAT &#8211;to-destination 172.18.0.2:18068
-A DOCKER ! -i br-XXXXXXXXXXXX -p udp -m udp &#8211;dport 18069 -j DNAT &#8211;to-destination 172.18.0.2:18069
-A DOCKER ! -i br-XXXXXXXXXXXX -p udp -m udp &#8211;dport 18070 -j DNAT &#8211;to-destination 172.18.0.2:18070
-A DOCKER ! -i br-XXXXXXXXXXXX -p udp -m udp &#8211;dport 18071 -j DNAT &#8211;to-destination 172.18.0.2:18071
-A DOCKER ! -i br-XXXXXXXXXXXX -p udp -m udp &#8211;dport 18072 -j DNAT &#8211;to-destination 172.18.0.2:18072
-A DOCKER ! -i br-XXXXXXXXXXXX -p udp -m udp &#8211;dport 18073 -j DNAT &#8211;to-destination 172.18.0.2:18073
-A DOCKER ! -i br-XXXXXXXXXXXX -p udp -m udp &#8211;dport 18074 -j DNAT &#8211;to-destination 172.18.0.2:18074
-A DOCKER ! -i br-XXXXXXXXXXXX -p udp -m udp &#8211;dport 18075 -j DNAT &#8211;to-destination 172.18.0.2:18075
-A DOCKER ! -i br-XXXXXXXXXXXX -p udp -m udp &#8211;dport 18076 -j DNAT &#8211;to-destination 172.18.0.2:18076
-A DOCKER ! -i br-XXXXXXXXXXXX -p udp -m udp &#8211;dport 18077 -j DNAT &#8211;to-destination 172.18.0.2:18077
-A DOCKER ! -i br-XXXXXXXXXXXX -p udp -m udp &#8211;dport 18078 -j DNAT &#8211;to-destination 172.18.0.2:18078
-A DOCKER ! -i br-XXXXXXXXXXXX -p udp -m udp &#8211;dport 18079 -j DNAT &#8211;to-destination 172.18.0.2:18079
-A DOCKER ! -i br-XXXXXXXXXXXX -p udp -m udp &#8211;dport 18080 -j DNAT &#8211;to-destination 172.18.0.2:18080
-A DOCKER ! -i br-XXXXXXXXXXXX -p udp -m udp &#8211;dport 18081 -j DNAT &#8211;to-destination 172.18.0.2:18081
-A DOCKER ! -i br-XXXXXXXXXXXX -p udp -m udp &#8211;dport 18082 -j DNAT &#8211;to-destination 172.18.0.2:18082
-A DOCKER ! -i br-XXXXXXXXXXXX -p udp -m udp &#8211;dport 18083 -j DNAT &#8211;to-destination 172.18.0.2:18083
-A DOCKER ! -i br-XXXXXXXXXXXX -p udp -m udp &#8211;dport 18084 -j DNAT &#8211;to-destination 172.18.0.2:18084
-A DOCKER ! -i br-XXXXXXXXXXXX -p udp -m udp &#8211;dport 18085 -j DNAT &#8211;to-destination 172.18.0.2:18085
-A DOCKER ! -i br-XXXXXXXXXXXX -p udp -m udp &#8211;dport 18086 -j DNAT &#8211;to-destination 172.18.0.2:18086
-A DOCKER ! -i br-XXXXXXXXXXXX -p udp -m udp &#8211;dport 18087 -j DNAT &#8211;to-destination 172.18.0.2:18087
-A DOCKER ! -i br-XXXXXXXXXXXX -p udp -m udp &#8211;dport 18088 -j DNAT &#8211;to-destination 172.18.0.2:18088
-A DOCKER ! -i br-XXXXXXXXXXXX -p udp -m udp &#8211;dport 18089 -j DNAT &#8211;to-destination 172.18.0.2:18089
-A DOCKER ! -i br-XXXXXXXXXXXX -p udp -m udp &#8211;dport 18090 -j DNAT &#8211;to-destination 172.18.0.2:18090
-A DOCKER ! -i br-XXXXXXXXXXXX -p udp -m udp &#8211;dport 18091 -j DNAT &#8211;to-destination 172.18.0.2:18091
-A DOCKER ! -i br-XXXXXXXXXXXX -p udp -m udp &#8211;dport 18092 -j DNAT &#8211;to-destination 172.18.0.2:18092
-A DOCKER ! -i br-XXXXXXXXXXXX -p udp -m udp &#8211;dport 18093 -j DNAT &#8211;to-destination 172.18.0.2:18093
-A DOCKER ! -i br-XXXXXXXXXXXX -p udp -m udp &#8211;dport 18094 -j DNAT &#8211;to-destination 172.18.0.2:18094
-A DOCKER ! -i br-XXXXXXXXXXXX -p udp -m udp &#8211;dport 18095 -j DNAT &#8211;to-destination 172.18.0.2:18095
-A DOCKER ! -i br-XXXXXXXXXXXX -p udp -m udp &#8211;dport 18096 -j DNAT &#8211;to-destination 172.18.0.2:18096
-A DOCKER ! -i br-XXXXXXXXXXXX -p udp -m udp &#8211;dport 18097 -j DNAT &#8211;to-destination 172.18.0.2:18097
-A DOCKER ! -i br-XXXXXXXXXXXX -p udp -m udp &#8211;dport 18098 -j DNAT &#8211;to-destination 172.18.0.2:18098
-A DOCKER ! -i br-XXXXXXXXXXXX -p udp -m udp &#8211;dport 18099 -j DNAT &#8211;to-destination 172.18.0.2:18099
-A DOCKER ! -i br-XXXXXXXXXXXX -p udp -m udp &#8211;dport 18100 -j DNAT &#8211;to-destination 172.18.0.2:18100
COMMIT
# Completed on Sat Jun 21 20:38:17 2025
    </div>
</div>

</body>
</html>
