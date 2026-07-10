---
title: "SHODAN Dorks"
publishedAt: 2024-03-22T21:01:17
summary: "READ ARTICLE By: ZION3R Shodan Dorks Basic Shodan Filters city: Find devices in a particular city. city:”Bangalore” country: Find devices in a particular country. country:”IN” geo: Find devices by giving geographical coordinates. geo:”56.913055,118.250862″ Location country:us cou"
category: "Offensive Devices / Tactics"
categories:
  - "Offensive Devices / Tactics"
tags:
  - "SHODAN"
  - "SHODAN DORKS"
heroImage: "/wp-content/uploads/2024/03/bluesynack_shodan_dorks_87448a63-aead-4217-aae2-b5b4eda2235b.png"
wpId: 1536
wpSlug: "shodan-dorks"
originalLink: "https://bulwarkblack.com/shodan-dorks"
draft: false
---


<p class="has-large-font-size"><a href="https://www.hacking.land/2024/03/shodan-dorks.html" title="">READ ARTICLE</a></p>



<p class="has-small-font-size"><a href="https://www.hacking.land/2024/03/shodan-dorks.html">By: ZION3R</a></p>



<h1 class="wp-block-heading">Shodan Dorks</h1>



<h1 class="wp-block-heading">Basic Shodan Filters</h1>



<h3 class="wp-block-heading">city:</h3>



<p>Find devices in a particular city.&nbsp;<code>city:"Bangalore"</code></p>



<h3 class="wp-block-heading">country:</h3>



<p>Find devices in a particular country.&nbsp;<code>country:"IN"</code></p>



<h3 class="wp-block-heading">geo:</h3>



<p>Find devices by giving geographical coordinates.&nbsp;<code>geo:"56.913055,118.250862"</code></p>



<h3 class="wp-block-heading">Location</h3>



<p><code>country:us</code>&nbsp;<code>country:ru country:de city:chicago</code></p>



<h3 class="wp-block-heading">hostname:</h3>



<p>Find devices matching the hostname.&nbsp;<code>server: "gws" hostname:"google"</code>&nbsp;<code>hostname:example.com -hostname:subdomain.example.com</code>&nbsp;<code>hostname:example.com,example.org</code></p>



<h3 class="wp-block-heading">net:</h3>



<p>Find devices based on an IP address or /x CIDR.&nbsp;<code>net:210.214.0.0/16</code></p>



<h3 class="wp-block-heading">Organization</h3>



<p><code>org:microsoft</code>&nbsp;<code>org:"United States Department"</code></p>



<h3 class="wp-block-heading">Autonomous System Number (ASN)</h3>



<p><code>asn:ASxxxx</code></p>



<h3 class="wp-block-heading">os:</h3>



<p>Find devices based on operating system.&nbsp;<code>os:"windows 7"</code></p>



<h3 class="wp-block-heading">port:</h3>



<p>Find devices based on open ports.&nbsp;<code>proftpd port:21</code></p>



<h3 class="wp-block-heading">before/after:</h3>



<p>Find devices before or after between a given time.&nbsp;<code>apache after:22/02/2009 before:14/3/2010</code></p>



<h3 class="wp-block-heading">SSL/TLS Certificates</h3>



<p>Self signed certificates&nbsp;<code>ssl.cert.issuer.cn:example.com ssl.cert.subject.cn:example.com</code></p>



<p>Expired certificates&nbsp;<code>ssl.cert.expired:true</code></p>



<p><code>ssl.cert.subject.cn:example.com</code></p>



<h3 class="wp-block-heading">Device Type</h3>



<p><code>device:firewall</code>&nbsp;<code>device:router</code>&nbsp;<code>device:wap</code>&nbsp;<code>device:webcam</code>&nbsp;<code>device:media</code>&nbsp;<code>device:"broadband router"</code>&nbsp;<code>device:pbx</code>&nbsp;<code>device:printer</code>&nbsp;<code>device:switch</code>&nbsp;<code>device:storage</code>&nbsp;<code>device:specialized</code>&nbsp;<code>device:phone</code>&nbsp;<code>device:"voip"</code>&nbsp;<code>device:"voip phone"</code>&nbsp;<code>device:"voip adaptor"</code>&nbsp;<code>device:"load balancer"</code>&nbsp;<code>device:"print server"</code>&nbsp;<code>device:terminal</code>&nbsp;<code>device:remote</code>&nbsp;<code>device:telecom</code>&nbsp;<code>device:power</code>&nbsp;<code>device:proxy</code>&nbsp;<code>device:pda</code>&nbsp;<code>device:bridge</code></p>



<h3 class="wp-block-heading">Operating System</h3>



<p><code>os:"windows 7"</code>&nbsp;<code>os:"windows server 2012"</code>&nbsp;<code>os:"linux 3.x"</code></p>



<h3 class="wp-block-heading">Product</h3>



<p><code>product:apache</code>&nbsp;<code>product:nginx</code>&nbsp;<code>product:android</code>&nbsp;<code>product:chromecast</code></p>



<h3 class="wp-block-heading">Customer Premises Equipment (CPE)</h3>



<p><code>cpe:apple</code>&nbsp;<code>cpe:microsoft</code>&nbsp;<code>cpe:nginx</code>&nbsp;<code>cpe:cisco</code></p>



<h3 class="wp-block-heading">Server</h3>



<p><code>server: nginx</code>&nbsp;<code>server: apache</code>&nbsp;<code>server: microsoft</code>&nbsp;<code>server: cisco-ios</code></p>



<h3 class="wp-block-heading">ssh fingerprints</h3>



<p><code>dc:14:de:8e:d7:c1:15:43:23:82:25:81:d2:59:e8:c0</code></p>



<h1 class="wp-block-heading">Web</h1>



<h3 class="wp-block-heading">Pulse Secure</h3>



<p><code>http.html:/dana-na</code></p>



<h3 class="wp-block-heading">PEM Certificates</h3>



<p><code>http.title:"Index of /" http.html:".pem"</code></p>



<h3 class="wp-block-heading">Tor / Dark Web sites</h3>



<p><code>onion-location</code></p>



<h1 class="wp-block-heading">Databases</h1>



<h3 class="wp-block-heading">MySQL</h3>



<p><code>"product:MySQL"</code>&nbsp;<code>mysql port:"3306"</code></p>



<h3 class="wp-block-heading">MongoDB</h3>



<p><code>"product:MongoDB"</code>&nbsp;<code>mongodb port:27017</code></p>



<h3 class="wp-block-heading">Fully open MongoDBs</h3>



<p><code>"MongoDB Server Information { "metrics":"</code>&nbsp;<code>"Set-Cookie: mongo-express=" "200 OK"</code>&nbsp;<code>"MongoDB Server Information" port:27017 -authentication</code></p>



<h3 class="wp-block-heading">Kibana dashboards without authentication</h3>



<p><code>kibana content-legth:217</code></p>



<h3 class="wp-block-heading">elastic</h3>



<p><code>port:9200 json</code>&nbsp;<code>port:"9200" all:elastic</code>&nbsp;<code>port:"9200" all:"elastic indices"</code></p>



<h3 class="wp-block-heading">Memcached</h3>



<p><code>"product:Memcached"</code></p>



<h3 class="wp-block-heading">CouchDB</h3>



<p><code>"product:CouchDB"</code>&nbsp;<code>port:"5984"+Server: "CouchDB/2.1.0"</code></p>



<h3 class="wp-block-heading">PostgreSQL</h3>



<p><code>"port:5432 PostgreSQL"</code></p>



<h3 class="wp-block-heading">Riak</h3>



<p><code>"port:8087 Riak"</code></p>



<h3 class="wp-block-heading">Redis</h3>



<p><code>"product:Redis"</code></p>



<h3 class="wp-block-heading">Cassandra</h3>



<p><code>"product:Cassandra"</code></p>



<h1 class="wp-block-heading">Industrial Control Systems</h1>



<h3 class="wp-block-heading">Samsung Electronic Billboards</h3>



<p><code>"Server: Prismview Player"</code></p>



<h3 class="wp-block-heading">Gas Station Pump Controllers</h3>



<p><code>"in-tank inventory" port:10001</code></p>



<h3 class="wp-block-heading">Fuel Pumps connected to internet:</h3>



<p>No auth required to access CLI terminal.&nbsp;<code>"privileged command" GET</code></p>



<h3 class="wp-block-heading">Automatic License Plate Readers</h3>



<p><code>P372 "ANPR enabled"</code></p>



<h3 class="wp-block-heading">Traffic Light Controllers / Red Light Cameras</h3>



<p><code>mikrotik streetlight</code></p>



<h3 class="wp-block-heading">Voting Machines in the United States</h3>



<p>&#8220;voter system serial&#8221; country:US</p>



<h3 class="wp-block-heading">Open ATM:</h3>



<p>May allow for ATM Access availability&nbsp;<code>NCR Port:"161"</code></p>



<h3 class="wp-block-heading">Telcos Running Cisco Lawful Intercept Wiretaps</h3>



<p><code>"Cisco IOS" "ADVIPSERVICESK9_LI-M"</code></p>



<h3 class="wp-block-heading">Prison Pay Phones</h3>



<p><code>"[2J[H Encartele Confidential"</code></p>



<h3 class="wp-block-heading">Tesla PowerPack Charging Status</h3>



<p><code>http.title:"Tesla PowerPack System" http.component:"d3" -ga3ca4f2</code></p>



<h3 class="wp-block-heading">Electric Vehicle Chargers</h3>



<p><code>"Server: gSOAP/2.8" "Content-Length: 583"</code></p>



<h3 class="wp-block-heading">Maritime Satellites</h3>



<p>Shodan made a pretty sweet Ship Tracker that maps ship locations in real time, too!</p>



<p><code>"Cobham SATCOM" OR ("Sailor" "VSAT")</code></p>



<h3 class="wp-block-heading">Submarine Mission Control Dashboards</h3>



<p><code>title:"Slocum Fleet Mission Control"</code></p>



<h3 class="wp-block-heading">CAREL PlantVisor Refrigeration Units</h3>



<p><code>"Server: CarelDataServer" "200 Document follows"</code></p>



<h3 class="wp-block-heading">Nordex Wind Turbine Farms</h3>



<p><code>http.title:"Nordex Control" "Windows 2000 5.0 x86" "Jetty/3.1 (JSP 1.1; Servlet 2.2; java 1.6.0_14)"</code></p>



<h3 class="wp-block-heading">C4 Max Commercial Vehicle GPS Trackers</h3>



<p><code>"[1m[35mWelcome on console"</code></p>



<h3 class="wp-block-heading">DICOM Medical X-Ray Machines</h3>



<p>Secured by default, thankfully, but these 1,700+ machines still have no business being on the internet.</p>



<p><code>"DICOM Server Response" port:104</code></p>



<h3 class="wp-block-heading">GaugeTech Electricity Meters</h3>



<p><code>"Server: EIG Embedded Web Server" "200 Document follows"</code></p>



<h3 class="wp-block-heading">Siemens Industrial Automation</h3>



<p><code>"Siemens, SIMATIC" port:161</code></p>



<h3 class="wp-block-heading">Siemens HVAC Controllers</h3>



<p><code>"Server: Microsoft-WinCE" "Content-Length: 12581"</code></p>



<h3 class="wp-block-heading">Door / Lock Access Controllers</h3>



<p><code>"HID VertX" port:4070</code></p>



<h3 class="wp-block-heading">Railroad Management</h3>



<p><code>"log off" "select the appropriate"</code></p>



<h3 class="wp-block-heading">Tesla Powerpack charging Status:</h3>



<p>Helps to find the charging status of tesla powerpack.&nbsp;<code>http.title:"Tesla PowerPack System" http.component:"d3" -ga3ca4f2</code></p>



<h3 class="wp-block-heading">XZERES Wind Turbine</h3>



<p><code>title:"xzeres wind"</code></p>



<h3 class="wp-block-heading">PIPS&nbsp;<a href="https://www.kitploit.com/search/label/Automated" rel="noreferrer noopener" target="_blank">Automated</a>&nbsp;License Plate Reader</h3>



<p><code>"html:"PIPS Technology ALPR Processors""</code></p>



<h3 class="wp-block-heading">Modbus</h3>



<p><code>"port:502"</code></p>



<h3 class="wp-block-heading">Niagara Fox</h3>



<p><code>"port:1911,4911 product:Niagara"</code></p>



<h3 class="wp-block-heading">GE-SRTP</h3>



<p><code>"port:18245,18246 product:"general electric""</code></p>



<h3 class="wp-block-heading">MELSEC-Q</h3>



<p><code>"port:5006,5007 product:mitsubishi"</code></p>



<h3 class="wp-block-heading">CODESYS</h3>



<p><code>"port:2455 operating system"</code></p>



<h3 class="wp-block-heading">S7</h3>



<p><code>"port:102"</code></p>



<h3 class="wp-block-heading">BACnet</h3>



<p><code>"port:47808"</code></p>



<h3 class="wp-block-heading">HART-IP</h3>



<p><code>"port:5094 hart-ip"</code></p>



<h3 class="wp-block-heading">Omron FINS</h3>



<p><code>"port:9600 response code"</code></p>



<h3 class="wp-block-heading">IEC 60870-5-104</h3>



<p><code>"port:2404 asdu address"</code></p>



<h3 class="wp-block-heading">DNP3</h3>



<p><code>"port:20000 source address"</code></p>



<h3 class="wp-block-heading">EtherNet/IP</h3>



<p><code>"port:44818"</code></p>



<h3 class="wp-block-heading">PCWorx</h3>



<p><code>"port:1962 PLC"</code></p>



<h3 class="wp-block-heading">Crimson v3.0</h3>



<p><code>"port:789 product:"Red Lion Controls"</code></p>



<h3 class="wp-block-heading">ProConOS</h3>



<p><code>"port:20547 PLC"</code></p>



<h1 class="wp-block-heading">Remote Desktop</h1>



<h3 class="wp-block-heading">Unprotected VNC</h3>



<p><code>"authentication disabled" port:5900,5901</code>&nbsp;<code>"authentication disabled" "RFB 003.008"</code></p>



<h3 class="wp-block-heading">Windows RDP</h3>



<p>99.99% are secured by a secondary Windows login screen.</p>



<p><code>"\x03\x00\x00\x0b\x06\xd0\x00\x00\x124\x00"</code></p>



<h1 class="wp-block-heading">C2 Infrastructure</h1>



<h3 class="wp-block-heading">CobaltStrike Servers</h3>



<p><code>product:"cobalt strike team server"</code>&nbsp;<code>product:"Cobalt Strike Beacon"</code>&nbsp;<code>ssl.cert.serial:146473198</code>&nbsp;&#8211; default certificate serial number&nbsp;<code>ssl.jarm:07d14d16d21d21d07c42d41d00041d24a458a375eef0c576d23a7bab9a9fb1</code>&nbsp;<code>ssl:foren.zik</code></p>



<h3 class="wp-block-heading">Brute Ratel</h3>



<p><code>http.html_hash:-1957161625</code>&nbsp;<code>product:"Brute Ratel C4"</code></p>



<h3 class="wp-block-heading">Covenant</h3>



<p><code>ssl:"Covenant" http.component:"Blazor"</code></p>



<h3 class="wp-block-heading">Metasploit</h3>



<p><code>ssl:"MetasploitSelfSignedCA"</code></p>



<h1 class="wp-block-heading">Network Infrastructure</h1>



<h3 class="wp-block-heading">Hacked routers:</h3>



<p>Routers which got compromised&nbsp;<code>hacked-router-help-sos</code></p>



<h3 class="wp-block-heading">Redis open instances</h3>



<p><code>product:"Redis key-value store"</code></p>



<h3 class="wp-block-heading">Citrix:</h3>



<p>Find Citrix Gateway.&nbsp;<code>title:"citrix gateway"</code></p>



<h3 class="wp-block-heading">Weave Scope Dashboards</h3>



<p>Command-line access inside&nbsp;<a href="https://www.kitploit.com/search/label/Kubernetes" rel="noreferrer noopener" target="_blank">Kubernetes</a>&nbsp;pods and Docker containers, and real-time visualization/monitoring of the entire infrastructure.</p>



<p><code>title:"Weave Scope" http.favicon.hash:567176827</code></p>



<h3 class="wp-block-heading">Jenkins CI</h3>



<p><code>"X-Jenkins" "Set-Cookie: JSESSIONID" http.title:"Dashboard"</code></p>



<h3 class="wp-block-heading">Jenkins:</h3>



<p>Jenkins Unrestricted Dashboard&nbsp;<code>x-jenkins 200</code></p>



<h3 class="wp-block-heading">Docker APIs</h3>



<p><code>"Docker Containers:" port:2375</code></p>



<h3 class="wp-block-heading">Docker Private Registries</h3>



<p><code>"Docker-Distribution-Api-Version: registry" "200 OK" -gitlab</code></p>



<h3 class="wp-block-heading">Pi-hole Open DNS Servers</h3>



<p><code>"dnsmasq-pi-hole" "Recursion: enabled"</code></p>



<h3 class="wp-block-heading">DNS Servers with recursion</h3>



<p><code>"port: 53" Recursion: Enabled</code></p>



<h3 class="wp-block-heading">Already Logged-In as root via Telnet</h3>



<p><code>"root@" port:23 -login -password -name -Session</code></p>



<h3 class="wp-block-heading">Telnet Access:</h3>



<p>NO password required for telnet access.&nbsp;<code>port:23 console gateway</code></p>



<h3 class="wp-block-heading">Polycom video-conference system no-auth shell</h3>



<p><code>"polycom command shell"</code></p>



<h3 class="wp-block-heading">NPort serial-to-eth / MoCA devices without password</h3>



<p><code>nport -keyin port:23</code></p>



<h3 class="wp-block-heading">Android Root Bridges</h3>



<p>A tangential result of Google&#8217;s sloppy fractured update approach. đŸ™„ More information here.</p>



<p><code>"Android Debug Bridge" "Device" port:5555</code></p>



<h3 class="wp-block-heading">Lantronix Serial-to-Ethernet Adapter Leaking Telnet Passwords</h3>



<p><code>Lantronix password port:30718 -secured</code></p>



<h3 class="wp-block-heading">Citrix Virtual Apps</h3>



<p><code>"Citrix Applications:" port:1604</code></p>



<h3 class="wp-block-heading">Cisco Smart Install</h3>



<p>Vulnerable (kind of &#8220;by design,&#8221; but especially when exposed).</p>



<p><code>"smart install client active"</code></p>



<h3 class="wp-block-heading">PBX IP Phone Gateways</h3>



<p><code>PBX "gateway console" -password port:23</code></p>



<h3 class="wp-block-heading">Polycom Video Conferencing</h3>



<p><code>http.title:"- Polycom" "Server: lighttpd"</code>&nbsp;<code>"Polycom Command Shell" -failed port:23</code></p>



<h3 class="wp-block-heading">Telnet Configuration:</h3>



<p><code>"Polycom Command Shell" -failed port:23</code></p>



<p>Example: Polycom Video Conferencing</p>



<h3 class="wp-block-heading">Bomgar Help Desk Portal</h3>



<p><code>"Server: Bomgar" "200 OK"</code></p>



<h3 class="wp-block-heading">Intel Active&nbsp;<a href="https://www.kitploit.com/search/label/Management" rel="noreferrer noopener" target="_blank">Management</a>&nbsp;CVE-2017-5689</h3>



<p><code>"Intel(R) Active Management Technology" port:623,664,16992,16993,16994,16995</code>&nbsp;<code>"Active Management Technology"</code></p>



<h3 class="wp-block-heading">HP iLO 4 CVE-2017-12542</h3>



<p><code>HP-ILO-4 !"HP-ILO-4/2.53" !"HP-ILO-4/2.54" !"HP-ILO-4/2.55" !"HP-ILO-4/2.60" !"HP-ILO-4/2.61" !"HP-ILO-4/2.62" !"HP-iLO-4/2.70" port:1900</code></p>



<h3 class="wp-block-heading">Lantronix ethernet adapter&#8217;s admin interface without password</h3>



<p><code>"Press Enter for Setup Mode port:9999"</code></p>



<h3 class="wp-block-heading">Wifi Passwords:</h3>



<p>Helps to find the cleartext wifi passwords in Shodan.&nbsp;<code>html:"def_wirelesspassword"</code></p>



<h3 class="wp-block-heading">Misconfigured WordPress Sites:</h3>



<p>The wp-config.php if accessed can give out the database credentials.&nbsp;<code>http.html:"* The wp-config.php creation script uses this file"</code></p>



<h1 class="wp-block-heading">Outlook Web Access:</h1>



<h3 class="wp-block-heading">Exchange 2007</h3>



<p><code>"x-owa-version" "IE=EmulateIE7" "Server: Microsoft-IIS/7.0"</code></p>



<h3 class="wp-block-heading">Exchange 2010</h3>



<p><code>"x-owa-version" "IE=EmulateIE7" http.favicon.hash:442749392</code></p>



<h3 class="wp-block-heading">Exchange 2013 / 2016</h3>



<p><code>"X-AspNet-Version" http.title:"Outlook" -"x-owa-version"</code></p>



<h3 class="wp-block-heading">Lync / Skype for Business</h3>



<p><code>"X-MS-Server-Fqdn"</code></p>



<h1 class="wp-block-heading">Network Attached Storage (NAS)</h1>



<h3 class="wp-block-heading">SMB (Samba) File Shares</h3>



<p>Produces ~500,000 results&#8230;narrow down by adding &#8220;Documents&#8221; or &#8220;Videos&#8221;, etc.</p>



<p><code>"Authentication: disabled" port:445</code></p>



<h3 class="wp-block-heading">Specifically domain controllers:</h3>



<p><code>"Authentication: disabled" NETLOGON SYSVOL -unix port:445</code></p>



<h3 class="wp-block-heading">Concerning default network shares of QuickBooks files:</h3>



<p><code>"Authentication: disabled" "Shared this folder to access QuickBooks files OverNetwork" -unix port:445</code></p>



<h3 class="wp-block-heading">FTP Servers with&nbsp;<a href="https://www.kitploit.com/search/label/Anonymous" rel="noreferrer noopener" target="_blank">Anonymous</a>&nbsp;Login</h3>



<p><code>"220" "230 Login successful." port:21</code></p>



<h3 class="wp-block-heading">Iomega / LenovoEMC NAS Drives</h3>



<p><code>"Set-Cookie: iomega=" -"manage/login.html" -http.title:"Log In"</code></p>



<h3 class="wp-block-heading">Buffalo TeraStation NAS Drives</h3>



<p><code>Redirecting sencha port:9000</code></p>



<h3 class="wp-block-heading">Logitech Media Servers</h3>



<p><code>"Server: Logitech Media Server" "200 OK"</code></p>



<p>Example: Logitech Media Servers</p>



<h3 class="wp-block-heading">Plex Media Servers</h3>



<p><code>"X-Plex-Protocol" "200 OK" port:32400</code></p>



<h3 class="wp-block-heading">Tautulli / PlexPy Dashboards</h3>



<p><code>"CherryPy/5.1.0" "/home"</code></p>



<h3 class="wp-block-heading">Home router attached USB</h3>



<p><code>"IPC$ all storage devices"</code></p>



<h1 class="wp-block-heading">Webcams</h1>



<h3 class="wp-block-heading">Generic camera search</h3>



<p><code>title:camera</code></p>



<h3 class="wp-block-heading">Webcams with screenshots</h3>



<p><code>webcam has_screenshot:true</code></p>



<h3 class="wp-block-heading">D-Link webcams</h3>



<p><code>"d-Link Internet Camera, 200 OK"</code></p>



<h3 class="wp-block-heading">Hipcam</h3>



<p><code>"Hipcam RealServer/V1.0"</code></p>



<h3 class="wp-block-heading">Yawcams</h3>



<p><code>"Server: yawcam" "Mime-Type: text/html"</code></p>



<h3 class="wp-block-heading">webcamXP/webcam7</h3>



<p><code>("webcam 7" OR "webcamXP") http.component:"mootools" -401</code></p>



<h3 class="wp-block-heading">Android IP Webcam Server</h3>



<p><code>"Server: IP Webcam Server" "200 OK"</code></p>



<h3 class="wp-block-heading">Security DVRs</h3>



<p><code>html:"DVR_H264 ActiveX"</code></p>



<h3 class="wp-block-heading">Surveillance Cams:</h3>



<p>With username:admin and password: 😛&nbsp;<code>NETSurveillance uc-httpd</code>&nbsp;<code>Server: uc-httpd 1.0.0</code></p>



<h1 class="wp-block-heading">Printers &amp; Copiers:</h1>



<h3 class="wp-block-heading">HP Printers</h3>



<p><code>"Serial Number:" "Built:" "Server: HP HTTP"</code></p>



<h3 class="wp-block-heading">Xerox Copiers/Printers</h3>



<p><code>ssl:"Xerox Generic Root"</code></p>



<h3 class="wp-block-heading">Epson Printers</h3>



<p><code>"SERVER: EPSON_Linux UPnP" "200 OK"</code></p>



<p><code>"Server: EPSON-HTTP" "200 OK"</code></p>



<h3 class="wp-block-heading">Canon Printers</h3>



<p><code>"Server: KS_HTTP" "200 OK"</code></p>



<p><code>"Server: CANON HTTP Server"</code></p>



<h1 class="wp-block-heading">Home Devices</h1>



<h3 class="wp-block-heading">Yamaha Stereos</h3>



<p><code>"Server: AV_Receiver" "HTTP/1.1 406"</code></p>



<h3 class="wp-block-heading">Apple AirPlay Receivers</h3>



<p>Apple TVs, HomePods, etc.</p>



<p><code>"\x08_airplay" port:5353</code></p>



<h3 class="wp-block-heading">Chromecasts / Smart TVs</h3>



<p><code>"Chromecast:" port:8008</code></p>



<h3 class="wp-block-heading">Crestron Smart Home Controllers</h3>



<p><code>"Model: PYNG-HUB"</code></p>



<h1 class="wp-block-heading">Random Stuff</h1>



<h3 class="wp-block-heading">Calibre libraries</h3>



<p><code>"Server: calibre" http.status:200 http.title:calibre</code></p>



<h3 class="wp-block-heading">OctoPrint 3D Printer Controllers</h3>



<p><code>title:"OctoPrint" -title:"Login" http.favicon.hash:1307375944</code></p>



<h3 class="wp-block-heading">Etherium Miners</h3>



<p><code>"ETH - Total speed"</code></p>



<h3 class="wp-block-heading">Apache&nbsp;<a href="https://www.kitploit.com/search/label/Directory" rel="noreferrer noopener" target="_blank">Directory</a>&nbsp;Listings</h3>



<p>Substitute .pem with any extension or a filename like phpinfo.php.</p>



<p><code>http.title:"Index of /" http.html:".pem"</code></p>



<h3 class="wp-block-heading">Misconfigured WordPress</h3>



<p>Exposed wp-config.php files containing database credentials.</p>



<p><code>http.html:"* The wp-config.php creation script uses this file"</code></p>



<h3 class="wp-block-heading">Too Many Minecraft Servers</h3>



<p><code>"Minecraft Server" "protocol 340" port:25565</code></p>



<h3 class="wp-block-heading">Literally Everything in North Korea</h3>



<p><code>net:175.45.176.0/22,210.52.109.0/24,77.94.35.0/24</code></p>
