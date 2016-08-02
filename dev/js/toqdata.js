if ($(".company-search-container").length > 0) {
    var typesHash = new Hashtable();
    typesHash.put("24 HOUR FITNESS", "A8B");
    typesHash.put("3M", "0WJ");
    typesHash.put("7-ELEVEN", "B1K");
    typesHash.put("7 ELEVEN", "B1K");
    typesHash.put("7ELEVEN", "B1K");
    typesHash.put("A. H. BELO CORPORATION", "BGI");
    typesHash.put("AH BELO CORPORATION", "BGI");
    typesHash.put("A.T. CROSS COMPANY", "0JM");
    typesHash.put("AT CROSS COMPANY", "0JM");
    typesHash.put("AANA", "A5G");
    typesHash.put("AAR CORP", "AIR");
    typesHash.put("AB MAURI FOOD, INC", "AMR");
    typesHash.put("ABB", "017");
    typesHash.put("ABM INDUSTRIES INCORPORATED", "B3P");
    typesHash.put("ABRAXAS CORPORATION", "BKR");
    typesHash.put("ACCELRYS", "A1J");
    typesHash.put("ACCENTURE LLP", "BIH");
    typesHash.put("ACCESSPOINT, L.L.C", "B3R");
    typesHash.put("ACCO BRANDS . INC", "AWP");
    typesHash.put("ACCOUNT SOLUTIONS GROUP, LLC", "AI4");
    typesHash.put("ACCOUNTANTS ON CALL", "AOG");
    typesHash.put("ACE GROUP OF INSURANCE COMPANIES", "017");
    typesHash.put("ACTIVISION BLIZZARD", "A24");
    typesHash.put("ACUITY BRANDS", "BHC");
    typesHash.put("ADC TELECOMMUNICATIONS", "07M");
    typesHash.put("ADECCO", "017");
    typesHash.put("ADENA REGIONAL HEALTH SYSTEMS", "BTX");
    typesHash.put("ADMIRAL BEVERAGE CORPORATION", "AFK");
    typesHash.put("ADMIRALS BANK", "B6N");
    typesHash.put("ADOBE SYSTEMS INC", "A59");
    typesHash.put("ADP", "017");
    typesHash.put("ADP TOTALSOURCE, INC.", "017");
    typesHash.put("ADT, LLC", "B1U");
    typesHash.put("ADVANCE AUTO PARTS", "A56");
    typesHash.put("ADVANCED RESOURCE TECHNOLOGIES", "ATS");
    typesHash.put("ADVANTAGE NURSING SERVICES", "BQD");
    typesHash.put("ADVENTIST HEALTH SYSTEM/WEST", "017");
    typesHash.put("ADVOCATE HEALTH CARE", "04N");
    typesHash.put("AECOM", "017");
    typesHash.put("AEGIS MEDIA NORTH AMERICA", "A85");
    typesHash.put("AEROBICS & FITNESS ASOC. OF AMERICA", "BMJ");
    typesHash.put("AEROPOSTALE INC.", "BZQ");
    typesHash.put("AFFILIATED DISTRIBUTORS", "A5M");
    typesHash.put("AFFILIATED OPTOMETRISTS OF WALMART", "BXS");
    typesHash.put("AFFINITYTESTING DO NOT USE", "BTZ");
    typesHash.put("AFSCME COUNCIL 93 BOSTON", "B4R");
    typesHash.put("AFSCME COUNCIL 93 SUMUP", "BYX");
    typesHash.put("AFSCME MAINE MEMBERSHIP BENEFIT FND", "BXU");
    typesHash.put("AFSCME RETIREE CHAPTER 93", "BSH");
    typesHash.put("AGC AMERICA, INC.", "AE8");
    typesHash.put("AGCO CORPORATION", "02X");
    typesHash.put("AGGREGATE INDUSTRIES", "0ZU");
    typesHash.put("AGL RESOURCES INC", "AX9");
    typesHash.put("AGRI MARK", "B2T");
    typesHash.put("AGRICREDIT ACCEPTANCE COMPANY", "0EK");
    typesHash.put("AIMIA PROPRIETARY LOYALTY U.S. INC.", "BO4");
    typesHash.put("AIR EVAC SERVICES INC", "0JO");
    typesHash.put("AIR METHODS CORPORATION", "B4V");
    typesHash.put("AIRBORN MANAGEMENT, INC.", "AKC");
    typesHash.put("AIRGAS, INC.", "0VV");
    typesHash.put("AIRLINE TRAINING CENTER ARIZONA, IN", "AQO");
    typesHash.put("AJCP", "A4D");
    typesHash.put("AKIMA, LLC", "BN3");
    typesHash.put("AKRON GENERAL HEALTH SYSTEM", "A83");
    typesHash.put("ALAMEDA COUNTY MEDICAL CENTER", "BNJ");
    typesHash.put("ALAMOSA SCHOOL DISTRICT", "0VS");
    typesHash.put("ALASKA AIR GROUP", "BV0");
    typesHash.put("ALBANY INTERNATIONAL", "BNB");
    typesHash.put("ALBEMARLE CORPORATION", "B1Y");
    typesHash.put("ALBERTSON'S INC", "ACR");
    typesHash.put("ALBERTSON'S LLC", "017");
    typesHash.put("ALCOA", "A9I");
    typesHash.put("ALEGENT CREIGHTON HEALTH", "07G");
    typesHash.put("ALENT, INC", "0S1");
    typesHash.put("ALEXANDRIA EXTRUSION COMPANY", "0PO");
    typesHash.put("ALIANTE GAMING, LLC", "B19");
    typesHash.put("ALIGN TECHNOLOGY", "BRG");
    typesHash.put("ALKERMES INC", "BA1");
    typesHash.put("ALLEGIS GROUP", "AQ8");
    typesHash.put("ALLERGAN INC", "A50");
    typesHash.put("ALLIANCE DATA SYSTEMS", "AZ8");
    typesHash.put("ALLIANCE FOR AFFORDABLE SERVICES", "BVU");
    typesHash.put("ALLIANCE HEALTHCARE SERVICES", "ALB");
    typesHash.put("ALLIANCE RESIDENTIAL, LLC", "BR8");
    typesHash.put("ALLIANT ENERGY", "09U");
    typesHash.put("ALLIANT TECHSYSTEMS", "0RF");
    typesHash.put("ALLIANZ", "BA5");
    typesHash.put("ALLIED HOLDINGS, INC.", "AY2");
    typesHash.put("ALLINA HEALTH SYSTEM", "017");
    typesHash.put("ALLISON TRANSMISSION, INC.", "BNL");
    typesHash.put("ALLSCRIPTSMISYS HEALTHCARE SOLUTION", "AYB");
    typesHash.put("ALPHA NATURAL RESOURCES, INC.", "BVR");
    typesHash.put("ALPHARMA USPD", "0S3");
    typesHash.put("ALPHASOFT SERVICES CORPORATION", "ACK");
    typesHash.put("ALPHASTAFF INC", "BOW");
    typesHash.put("ALSAC, ST. JUDE CHILDRENS RESEARCH", "BCT");
    typesHash.put("ALSTOM", "AV4");
    typesHash.put("ALTEGRITY, INC.", "BSC");
    typesHash.put("ALTERA CORPORATION", "AZR");
    typesHash.put("ALTERNATIVE RESOURCES CORPORATION", "ADF");
    typesHash.put("ALTOONA REGIONAL HEALTH SYSTEM", "BBW");
    typesHash.put("ALTRIA", "017");
    typesHash.put("ALUMNI ASSOC COLLEGE OF LAKE COUNTY", "BBH");
    typesHash.put("AMADEUS AMERICAS INC", "BCS");
    typesHash.put("AMALGAMATED LIFE INSURANCE", "BJZ");
    typesHash.put("AMBROSE EMPLOYER GROUP LLC", "BUB");
    typesHash.put("AMDOCS", "A54");
    typesHash.put("AMERICA SERVICE GROUP", "AKM");
    typesHash.put("AMERICAN ACADEMY OF OTOLARYNGOLOGY", "BSW");
    typesHash.put("AMERICAN AIRLINES", "AXZ");
    typesHash.put("AMERICAN ASSOCIATION OF CLINICAL EN", "BPQ");
    typesHash.put("AMERICAN BASS ANGLERS ASSOCIATION", "B35");
    typesHash.put("AMERICAN BOATING ASSOCIATION, INC", "BGX");
    typesHash.put("AMERICAN BUREAU OF SHIPPING", "0GQ");
    typesHash.put("AMERICAN CANCER SOCIETY", "A7D");
    typesHash.put("AMERICAN CENTURY SERVICES, LLC", "APO");
    typesHash.put("AMERICAN CHAMBER OF COMMERCE", "BSN");
    typesHash.put("AMERICAN CHIROPRACTIC ASSOCIATION", "BIP");
    typesHash.put("AMERICAN COLLEGE OF OSTEOPATHIC FAM", "BS8");
    typesHash.put("AMERICAN COMMERCIAL LINES, LLC", "A8T");
    typesHash.put("AMERICAN COUNCIL OF ENGINEERING", "017");
    typesHash.put("AMERICAN DIABETES ASSOCIATION", "BV5");
    typesHash.put("AMERICAN EAGLE AIRLINES, INC", "BTS");
    typesHash.put("AMERICAN ELECTRIC POWER", "0AD");
    typesHash.put("AMERICAN EXPRESS BANKING CORP", "017");
    typesHash.put("AMERICAN FEDERATION OF GOVT EMPLOYE", "BSB");
    typesHash.put("AMERICAN FEDERATION OF TEACHERS", "BOS");
    typesHash.put("AMERICAN FEDERATION OF TEACHERS,CT", "A4G");
    typesHash.put("AMERICAN GREETINGS", "0UT");
    typesHash.put("AMERICAN HOTEL REGISTER COMPANY", "0Y0");
    typesHash.put("AMERICAN HUMANE ASSOCIATION", "BU1");
    typesHash.put("AMERICAN MASSAGE THERAPY ASSOC", "BGD");
    typesHash.put("AMERICAN PACKAGING CORP.", "0SN");
    typesHash.put("AMERICAN POSTAL WORKERS UNION", "BCX");
    typesHash.put("AMERICAN RADIO RELAY LEAGUE", "BDN");
    typesHash.put("AMERICAN RED CROSS", "017");
    typesHash.put("AMERICAN REPROGRAPHICS COMPANY", "BBZ");
    typesHash.put("AMERICAN SHOWA", "ASF");
    typesHash.put("AMERICAN SYSTEMS CORPORATION", "BK3");
    typesHash.put("AMERICAN TIRE DISTRIBUTORS INC.", "AMU");
    typesHash.put("AMERICAN UNIVERSITY", "BOD");
    typesHash.put("AMERICAN VETERANS", "BRW");
    typesHash.put("AMERICANS FOR FINANCIAL SECURITY", "BU6");
    typesHash.put("AMERICOLD LOGISTICS", "05A");
    typesHash.put("AMERIGROUP CORPORATION", "BHX");
    typesHash.put("AMERISOURCE BERGEN", "A1B");
    typesHash.put("AMERLUX, INC,", "B2A");
    typesHash.put("AMTROL INCORPORATED", "0L3");
    typesHash.put("AMWAY", "BGJ");
    typesHash.put("ANACOMP", "0MM");
    typesHash.put("ANALOG DEVICES, INC.", "BRK");
    typesHash.put("ANALOGIC CORPORATION", "BPJ");
    typesHash.put("ANALYSTS INTERNATIONAL", "0VM");
    typesHash.put("ANDRITZ INC", "0LM");
    typesHash.put("ANGIOTECH PHARMACEUTICALS INC", "BM4");
    typesHash.put("ANIXTER, INC.", "BPM");
    typesHash.put("ANSALDO STS UNA, INC.", "AXG");
    typesHash.put("ANSCHUTZ ENTERTAINMENT GROUP, INC", "BP3");
    typesHash.put("ANSON COUNTY SCHOOLS", "AYT");
    typesHash.put("ANSWERTHINK CONSULTING GROUP", "AWX");
    typesHash.put("ANTHEM EDUCATION GROUP", "ANR");
    typesHash.put("ANZA, INC.", "0YX");
    typesHash.put("AON CORPORATION", "BV2");
    typesHash.put("APACHE JUNCTION UNIFIED SCHOOL", "BRF");
    typesHash.put("APPLE INC", "BPO");
    typesHash.put("APPLEBEE'S INTERNATIONAL", "A6Y");
    typesHash.put("APPLETON COATED", "AFQ");
    typesHash.put("APPLICA CONSUMER PRODUCTS INC.", "0LV");
    typesHash.put("APPLIED TECHNOLOGY SYSTEMS, INC.", "ACL");
    typesHash.put("APRIA HEALTH", "A1H");
    typesHash.put("APS HEALTHCARE INC", "BH3");
    typesHash.put("APTARGROUP", "AP4");
    typesHash.put("APTIS", "0UU");
    typesHash.put("ARAMARK CORPORATION", "017");
    typesHash.put("ARBOR HOUSE ASSISTED LIVING CENTER", "B4N");
    typesHash.put("ARCHSTONE COMMUNITIES", "BU0");
    typesHash.put("AREVA INC", "BQB");
    typesHash.put("ARIZONA CHARTER SCHOOL", "BC6");
    typesHash.put("ARIZONA GOLF ASSOCIATION", "BGU");
    typesHash.put("ARIZONA STATE UNIVERSITY", "AZH");
    typesHash.put("ARKANSAS STATE EMPLOYEE ASSOCIATION", "BLV");
    typesHash.put("ARMED SERV. BEN.", "017");
    typesHash.put("ARMED SERVICES MUTUAL BENEFIT ASSOC", "A98");
    typesHash.put("ARMSTRONG WORLD INDUSTRIES", "AN7");
    typesHash.put("ARNOLD WORLDWIDE CORPORATION", "A76");
    typesHash.put("ARNOT OGDEN MEDICAL CENTER", "02N");
    typesHash.put("ARQULE", "0QW");
    typesHash.put("ARRIS", "0FU");
    typesHash.put("ARROW ELECTRONICS INC.", "AAZ");
    typesHash.put("ARROW EXTERMINATORS, INC.", "B5O");
    typesHash.put("ARUP LABORATORIES", "AWL");
    typesHash.put("ASCAP", "0HY");
    typesHash.put("ASCEND ONE CORPORATION", "ADJ");
    typesHash.put("ASHEVILLE-BUNCOMBE TECH COMMUNITY", "0HJ");
    typesHash.put("ASHLAND INC.", "017");
    typesHash.put("ASML US, INC.", "AR9");
    typesHash.put("ASPECT SOFTWARE INC.", "AOI");
    typesHash.put("ASPIRE", "0HX");
    typesHash.put("ASPIRE FCU", "BCM");
    typesHash.put("ASPIRUS, INC.", "BAD");
    typesHash.put("ASSOCIATED CREDIT UNION OF TEXAS", "BY8");
    typesHash.put("ASSOCIATED FOOD STORES", "094");
    typesHash.put("ASSOCIATED INDUSTRIES", "BZ3");
    typesHash.put("ASSOCIATED MATERIALS INCORPORATED", "A84");
    typesHash.put("ASSOCIATION OF AMERICAN MEDICAL COL", "A4Y");
    typesHash.put("ASTRAZENECA PHARMACEUTICALS LP", "A02");
    typesHash.put("ASTRONICS CORPORATION", "A48");
    typesHash.put("ASURION INSURANCE SERVICES INC", "BHQ");
    typesHash.put("AT&T", "017");
    typesHash.put("AT&T", "017");
    typesHash.put("ATARI", "0P9");
    typesHash.put("ATI LADISH LLC", "0DR");
    typesHash.put("ATKINS", "A46");
    typesHash.put("ATKORE INTERNATIONAL LTD", "BUA");
    typesHash.put("ATMOS ENERGY CORP", "A22");
    typesHash.put("ATR INTERNATIONAL, INC", "A7Q");
    typesHash.put("AUBURN COMMUNITY HOSPITAL", "0TL");
    typesHash.put("AUSTIN INDEPENDENT SCHOOL DISTRICT", "B3V");
    typesHash.put("AUTODESK, INC.", "AO5");
    typesHash.put("AUTOZONE PARTS INC", "BQ5");
    typesHash.put("AVAYA", "ABR");
    typesHash.put("AVBORNE INC", "BDK");
    typesHash.put("AVERA MCKENNAN HOSPITAL", "BR0");
    typesHash.put("AVERY DENNISON", "017");
    typesHash.put("AVIATION TECHNICAL SERVICES, INC", "BFQ");
    typesHash.put("AVID TECHNOLOGY", "AWA");
    typesHash.put("AVIS BUDGET GROUP", "AYY");
    typesHash.put("AVISTA CORPORATION", "BMU");
    typesHash.put("AVNET, INC.", "05N");
    typesHash.put("AVON AUTOMOTIVE INC,", "BET");
    typesHash.put("AVON RUBBER & PLASTICS, INC.", "0CV");
    typesHash.put("AXA EQUITABLE LIFE INSURANCE", "BV9");
    typesHash.put("AXCET HR SOLUTIONS", "B1N");
    typesHash.put("AZPB LP D/B/A ARIZONA", "AIJ");
    typesHash.put("B BRAUN MEDICAL INC.", "A1Q");
    typesHash.put("B. BRAUN MEDICAL INC.", "A1Q");
    typesHash.put("BABCOCK AND WILCOX INVESTMENT CO.", "B0B");
    typesHash.put("BADGER METER, INC.", "0BT");
    typesHash.put("BAE SYSTEMS INC", "0XL");
    typesHash.put("BAIN & COMPANY INC.", "0S5");
    typesHash.put("BALFOUR BEATTY CONSTRUCTION", "BRB");
    typesHash.put("BALFOUR BEATTY INVESTMENTS", "BMV");
    typesHash.put("BALFOUR BEATTY, INC.", "A34");
    typesHash.put("BALL STATE UNIVERSITY", "BI5");
    typesHash.put("BALLY TECHNOLOGIES, INC.", "BV4");
    typesHash.put("BALSZ SCHOOL DISTRICT 31", "B07");
    typesHash.put("BALTIMORE GAS & ELECTRIC", "03J");
    typesHash.put("BANCO DE SABADELL SA", "B6M");
    typesHash.put("BANFIELD, THE PET HOSPITAL", "A16");
    typesHash.put("BANK OF AMERICA", "02H");
    typesHash.put("BANK OF THE WEST", "BGR");
    typesHash.put("BANK OF TOKYO - MITSUBISHI UFJ, LTD", "0KQ");
    typesHash.put("BANKERS INSURANCE", "AMM");
    typesHash.put("BANNER HEALTH ARIZONA", "BYD");
    typesHash.put("BAPTIST HEALTH - ARKANSAS", "ADC");
    typesHash.put("BAPTIST HEALTH CARE", "B2M");
    typesHash.put("BARCLAY BANK", "BKK");
    typesHash.put("BARCO, INC.", "A2F");
    typesHash.put("BARNARD COLLEGE", "AJJ");
    typesHash.put("BARNES GROUP, INC.", "AU8");
    typesHash.put("BARRETT BUSINESS SERVICES", "BL5");
    typesHash.put("BARRINGTON BROADCASTING GROUP", "BO7");
    typesHash.put("BARTOW COUNTY SCHOOL SYSTEM", "BV8");
    typesHash.put("BASF", "017");
    typesHash.put("BATES USA", "04I");
    typesHash.put("BATTLE GROUND SCHOOL DISTRICT.", "BX2");
    typesHash.put("BAXTER INTERNATIONAL INC", "BOB");
    typesHash.put("BAYCARE HEALTH SYSTEMS", "BEF");
    typesHash.put("BAYER CORPORATE & BUSINESS SVCS,LLC", "A67");
    typesHash.put("BAYLOR HEALTH CARE SYSTEM", "BTJ");
    typesHash.put("BBDO", "05Q");
    typesHash.put("BD", "AX1");
    typesHash.put("BE&K, INC.", "ABT");
    typesHash.put("BEAULIEU GROUP, LLC", "BAW");
    typesHash.put("BEAUMONT", "017");
    typesHash.put("BEAUMONT SERVICES", "0HM");
    typesHash.put("BECU", "AP5");
    typesHash.put("BEHAVIORAL HEALTH NETWORK, INC", "BGN");
    typesHash.put("BELK STORES", "AXI");
    typesHash.put("BELL AND HOWELL, LLC", "BGG");
    typesHash.put("BELO CORPORATION", "AVM");
    typesHash.put("BELTSERVICE CORPORATION", "0RY");
    typesHash.put("BEMIS COMPANY, INC.", "0TD");
    typesHash.put("BENCHMARK ASSISTED LIVING", "BKE");
    typesHash.put("BENCHMARK ELECTRONICS, INC.", "04J");
    typesHash.put("BENEDICTINE UNIVERSITY", "0EE");
    typesHash.put("BENTLEY COLLEGE", "0AN");
    typesHash.put("BENTLEY SYSTEMS, INC.", "0V0");
    typesHash.put("BENTON EXPRESS, INC.", "AF8");
    typesHash.put("BERKSHIRE PROPERTY ADVISORS", "AQE");
    typesHash.put("BERRY PLASTICS", "BJV");
    typesHash.put("BERTELSMANN, INC.", "A73");
    typesHash.put("BEST WESTERN INTERNATIONAL", "0NQ");
    typesHash.put("BETTERINVESTING", "BUK");
    typesHash.put("BI, INCORPORATED", "0FF");
    typesHash.put("BILL AND MELINDA GATES FOUNDATION", "BN8");
    typesHash.put("BILLY GRAHAM EVANGELISTIC ASSOC.", "0G7");
    typesHash.put("BI-LO, LLC", "BA7");
    typesHash.put("BIMBO BAKERIES USA/WEST", "AZK");
    typesHash.put("BIOGEN", "0AF");
    typesHash.put("BIOMEDICAL ENGINEERING SOCIETY", "BQ0");
    typesHash.put("BLACK & DECKER TAMPA", "0JR");
    typesHash.put("BLACKROCK", "BSI");
    typesHash.put("BLOODCENTER OF WISCONSIN, INC", "B1M");
    typesHash.put("BLOOMBERG LP", "B4Z");
    typesHash.put("BLUE CROSS & BLUE SHIELD / RI", "A0B");
    typesHash.put("BLUE CROSS & BLUE SHIELD OF ARIZONA", "BND");
    typesHash.put("BLUE CROSS BLUE SHIELD OF MASS", "BH1");
    typesHash.put("BLUE CROSS OF IDAHO", "BI0");
    typesHash.put("BLUE CROSS/BLUE SHIELD OF KANSAS CI", "0RT");
    typesHash.put("BLUE CROSS/BLUE SHIELD OF UTICA/WAT", "0RX");
    typesHash.put("BLUE CROSS/C. NY", "0IU");
    typesHash.put("BLUE CROSS/MN", "04G");
    typesHash.put("BLUE CROSS/NC", "075");
    typesHash.put("BLUE RIDGE COMMUNITY COLLEGE", "0GM");
    typesHash.put("BLUE SHIELD OF CALIFORNIA", "017");
    typesHash.put("BLUMBERG EXCELSIOR", "0OU");
    typesHash.put("BLYTH, INC.", "ARD");
    typesHash.put("BMC", "AVP");
    typesHash.put("BMC SOFTWARE", "BAP");
    typesHash.put("BMW MANUFACTURING CORP.", "BNK");
    typesHash.put("BMW OF NORTH AMERICA", "BW6");
    typesHash.put("BNP PARIBAS", "A35");
    typesHash.put("BNY MELLON", "017");
    typesHash.put("BOART LONGYEAR CO", "BL1");
    typesHash.put("BOEHRINGHER INGELHEIM CORPORATION", "08Q");
    typesHash.put("BOISE STATE UNIVERSITY", "BSD");
    typesHash.put("BOOZ & COMPANY", "BLR");
    typesHash.put("BOOZ ALLEN HAMILTON INC", "BV6");
    typesHash.put("BOSLEY, INC", "BB3");
    typesHash.put("BOSTON COLLEGE", "058");
    typesHash.put("BOSTON FINANCIAL DATA SERVICES", "AQC");
    typesHash.put("BOSTON MARKET", "A6I");
    typesHash.put("BOSTON MEDICAL CENTER", "BVO");
    typesHash.put("BOSTON SCIENTIFIC", "017");
    typesHash.put("BOURN'S INC.", "0WG");
    typesHash.put("BOWNE & COMPANY, INC.", "AEK");
    typesHash.put("BP CORPORATION NORTH AMERICA INCORP", "B3I");
    typesHash.put("BRACCO DIAGNOSTICS INC.", "A2C");
    typesHash.put("BRADLEY COUNTY MEDICAL CENTER", "AI5");
    typesHash.put("BRIDGEPOINT EDUCATION, INC.", "BTB");
    typesHash.put("BRIDGESTONE AMERICAS INCORPORATED", "B14");
    typesHash.put("BRISTOL HOSPITAL", "0T1");
    typesHash.put("BROAD INSTITUTE", "BMP");
    typesHash.put("BROADCOM CORP", "BTK");
    typesHash.put("BROADRIDGE FINANCIAL SOLUTIONS, INC", "017");
    typesHash.put("BROCADE COMMUNICATIONS SYSTEMS", "AXS");
    typesHash.put("BROWN SHOE", "017");
    typesHash.put("BRYANT UNIVERSITY", "0B7");
    typesHash.put("BT AMERICAS HOLDINGS, INC.", "A2H");
    typesHash.put("BUCA, INC", "BAT");
    typesHash.put("BUCKS COUNTY COMMUNITY COLLEGE ALU", "BZA");
    typesHash.put("BULL INFORMATION SYSTEMS", "092");
    typesHash.put("BUREAU VERITAS INDUSTRIES & FAC", "BPK");
    typesHash.put("BURT HILL KOSAR RITTELMAN ASSOCIATE", "ARW");
    typesHash.put("BUTLER INTERNATIONAL", "AHU");
    typesHash.put("BUTLER SCHEIN ANIMAL HEALTH", "BTQ");
    typesHash.put("C & M CORPORATION", "0PH");
    typesHash.put("C&M CORPORATION", "0PH");
    typesHash.put("C R ENGLAND", "BMR");
    typesHash.put("C.R. ENGLAND", "BMR");
    typesHash.put("C&S WHOLESALE GROCERS", "AV3");
    typesHash.put("C & S WHOLESALE GROCERS", "AV3");
    typesHash.put("C.H. ROBINSON WORLDWIDE, INC.", "AEB");
    typesHash.put("CH ROBINSON WORLDWIDE, INC.", "AEB");
    typesHash.put("CA, INC", "0EV");
    typesHash.put("CABELA'S INC", "BMQ");
    typesHash.put("CABOT CORPORATION", "0AE");
    typesHash.put("CACI INTERNATIONAL", "AYQ");
    typesHash.put("CADENCE DESIGN SYSTEMS, INC.", "BAN");
    typesHash.put("CAJUN OPERATING COMPANY", "B4W");
    typesHash.put("CALDWELL COMMUNITY COLLEGE", "0QL");
    typesHash.put("CALIFORNIA BUILDERS EXCHANGES INSUR", "B4U");
    typesHash.put("CALIFORNIA CORRECTIONAL SUPERVISORS", "BNV");
    typesHash.put("CALIFORNIA INSTITUTE OF TECHNOLOGY", "B1T");
    typesHash.put("CALPORTLAND", "BEU");
    typesHash.put("CALSONIC KANSEI NORTH AMERICA", "AT3");
    typesHash.put("CAMBRIDGE HEALTH ALLIANCE", "B36");
    typesHash.put("CAMDEN CLARK MEMORIAL HOSPITAL", "A9C");
    typesHash.put("CAMPBELL SOUP COMPANY", "AAA");
    typesHash.put("CANBERRA INDUSTRIES", "B5P");
    typesHash.put("CANTOR FITZGERALD LLC", "0OT");
    typesHash.put("CAPE FEAR COMMUNITY COLLEGE", "ABD");
    typesHash.put("CAPGEMINI AMERICA INC,", "017");
    typesHash.put("CAPITAL DISTRICT PHYSICIANS", "A5J");
    typesHash.put("CAPITAL ONE FINANCIAL CORPORATION", "AYW");
    typesHash.put("CAPSUGEL", "BVH");
    typesHash.put("CARAUSTAR INDUSTRIES", "ARI");
    typesHash.put("CARDINGTON YUTAKA TECHNOLOGIES", "BEM");
    typesHash.put("CARE NEW ENGLAND", "A6M");
    typesHash.put("CARE TECH SOLUTIONS", "0W3");
    typesHash.put("CAREER EDUCATION CORPORATION", "017");
    typesHash.put("CARL ZEISS VISION INC.", "0TO");
    typesHash.put("CARLE FOUNDATION HOSPITAL", "BYK");
    typesHash.put("CARLSON COMPANIES", "03V");
    typesHash.put("CAROLINAS HEALTHCARE SYSTEM", "CHS");
    typesHash.put("CAROMONT HEALTH", "0D1");
    typesHash.put("CARONDELET HEALTH NETWORK", "0E6");
    typesHash.put("CARQUEST", "A27");
    typesHash.put("CARROLL HOSPITAL CENTER", "AX7");
    typesHash.put("CARTERET COMMUNITY COLLEGE", "0RD");
    typesHash.put("CASCADE VALLEY HOSPITAL & CLINICS", "ABG");
    typesHash.put("CASCADES TISSUE GROUP SALES INC.", "BZO");
    typesHash.put("CASE WESTERN RESERVE UNIVERSITY", "ADB");
    typesHash.put("CASTEC, INC.", "BCI");
    typesHash.put("CATERPILLAR", "017");
    typesHash.put("CATERPILLAR INSURANCE SERVICES CORP", "A5O");
    typesHash.put("CATHOLIC HEALTH EAST", "A4R");
    typesHash.put("CB RICHARD ELLIS/WHITTIER PARTNERS", "0V6");
    typesHash.put("CBEYOND COMMUNICATIONS", "BOC");
    typesHash.put("CBS RADIO", "A1V");
    typesHash.put("CDM SMITH", "0A1");
    typesHash.put("CEDARAPIDS,INC.", "0EZ");
    typesHash.put("CEDARS-SINAI MEDICAL CENTER", "BK4");
    typesHash.put("CELANESE AMERICAS CORPORATION", "0C4");
    typesHash.put("CENTEGRA HEALTH SYSTEM", "BVK");
    typesHash.put("CENTERPOINT ENERGY", "BIA");
    typesHash.put("CENTRA SOFTWARE", "AM9");
    typesHash.put("CENTRACARE HEALTH SYSTEM", "0BH");
    typesHash.put("CENTRAL ARIZONA PROJECT", "0NZ");
    typesHash.put("CENTRAL HEALTHCARE SERVICES INC.", "AX5");
    typesHash.put("CENTRAL MAINE MEDICAL CENTER", "ASB");
    typesHash.put("CENTRAL PURCHASING, INC", "BKW");
    typesHash.put("CENTURA HEALTH", "BGT");
    typesHash.put("CENTURION INDUSTRIES", "BS5");
    typesHash.put("CENTURY BANCORP", "AZX");
    typesHash.put("CENTURYLINK", "017");
    typesHash.put("CENVEO", "AVI");
    typesHash.put("CEPHEID", "B0C");
    typesHash.put("CERIDIAN", "AGE");
    typesHash.put("CERTIFIED PUBLIC ACCOUNTS OF NH", "A42");
    typesHash.put("CF INDUSTRIES", "0GX");
    typesHash.put("CGI-AMS INC.", "0IH");
    typesHash.put("CH2M HILL", "017");
    typesHash.put("CHAGRIN FALLS SCHOOLS PPT 81", "0XJ");
    typesHash.put("CHANDLER UNIFIED SCHOOL DISTRICT", "BWO");
    typesHash.put("CHAPARRAL ENERGY", "BQK");
    typesHash.put("CHARLES SCHWAB CORPORATION", "AQT");
    typesHash.put("CHARLOTTE HUNGERFORD HOSPITAL", "04C");
    typesHash.put("CHARLOTTE-MECKLENBURG SCHOOLS", "AU7");
    typesHash.put("CHART INDUSTRIES, INC.", "AGD");
    typesHash.put("CHARTER COMMUNICATIONS, INC.", "BLT");
    typesHash.put("CHARTER HR", "BSS");
    typesHash.put("CHEROKEE COUNTY BOARD OF EDUCATION", "A4J");
    typesHash.put("CHEVRON CORPORATION", "AMN");
    typesHash.put("CHEVRON RETIREE ASSOCIATION", "BU8");
    typesHash.put("CHG COMPANIES INC", "AIF");
    typesHash.put("CHICAGO ASSOCIATION FOR RETARDED CI", "ANQ");
    typesHash.put("CHICAGO BRIDGE & IRON (CB&I)", "AMQ");
    typesHash.put("CHICAGO LIGHTHOUSE", "0MI");
    typesHash.put("CHILDREN'S HEALTH SYSTEM", "AC5");
    typesHash.put("CHILDREN'S HEALTHCARE OF ATLANTA", "01X");
    typesHash.put("CHILDRENS HOME + AIDE SOCIETY OF IL", "0M1");
    typesHash.put("CHILDREN'S HOSPITAL BOSTON", "BE3");
    typesHash.put("CHILDREN'S HOSPITAL MEDICAL CENTER", "AJH");
    typesHash.put("CHILDREN'S MERCY HOSPITAL", "BPU");
    typesHash.put("CHILDRENS SPECIALIZED HOSPITAL", "BQQ");
    typesHash.put("CHIPOTLE MEXICAN GRILL, INC.", "A15");
    typesHash.put("CHRIST HOSPITAL", "BJ0");
    typesHash.put("CHRISTIANA CARE HEALTH SYSTEM", "017");
    typesHash.put("CHRYSLER GROUP LLC", "DCC");
    typesHash.put("CHRYSLER GROUP LLC - REPRESENTED", "DCX");
    typesHash.put("CIENA CORPORATION", "0W5");
    typesHash.put("CIGNA", "017");
    typesHash.put("CINCINNATI BELL, INC.", "BVL");
    typesHash.put("CIT GROUP INC.", "BWX");
    typesHash.put("CITGO PETROLEUM CORPORATION", "BRE");
    typesHash.put("CITI", "BGY");
    typesHash.put("CITIZENS BANK OF NEW HAMPSHIRE", "03A");
    typesHash.put("CITIZENS MEMORIAL HOSPITAL", "AFR");
    typesHash.put("CITY OF AURORA", "A6D");
    typesHash.put("CITY OF AUSTIN TEXAS", "B4Y");
    typesHash.put("CITY OF GRAPEVINE", "BU2");
    typesHash.put("CITY OF HOPE", "A1G");
    typesHash.put("CITY OF MANTECA", "B5N");
    typesHash.put("CITY OF NAPERVILLE", "BYR");
    typesHash.put("CITY OF NORTH LAS VEGAS", "A7S");
    typesHash.put("CITY OF PLANTATION", "BW4");
    typesHash.put("CITY OF TEMPE", "BSZ");
    typesHash.put("CITY OF UNIVERSITY CITY", "A4N");
    typesHash.put("CIVIL SERVICE EMPLOYEES ASSOCIATION", "BTY");
    typesHash.put("CJ MOYNA & SONS", "B47");
    typesHash.put("CKE RESTAURANTS", "BE7");
    typesHash.put("CLARCOR CORPORATION", "0H4");
    typesHash.put("CLARK ATLANTA UNIVERSITY", "BOH");
    typesHash.put("CLAXTON-HEPBURN MEDICAL CENTER", "AJ7");
    typesHash.put("CLEARWIRE CORPORATION", "BOL");
    typesHash.put("CLEVELAND CLINIC FOUNDATION", "0HU");
    typesHash.put("CLEVELAND COUNTY SCHOOLS", "AYV");
    typesHash.put("CLEVELAND REGIONAL MEDICAL CENTER", "AM0");
    typesHash.put("CLIFFS NATURAL RESOURCES INC.", "07C");
    typesHash.put("CLOSED ACCOUNT ADDITIONAL LINES", "AS8");
    typesHash.put("CLOSED ACCOUNT SPIN OFFS", "AS7");
    typesHash.put("CLOSED ACCOUNT STATE TO STATE TRANS", "AS6");
    typesHash.put("CLOW STAMPING COMPANY", "AHV");
    typesHash.put("CLUBCORP INC", "A58");
    typesHash.put("CMWA", "AEX");
    typesHash.put("COASTAL FEDERAL CREDIT UNION", "317");
    typesHash.put("COBHAM DEFENSE ELECTRONIC SYSTEMS", "BIU");
    typesHash.put("COEUR D' ALENE MINES CORPORATION", "0MV");
    typesHash.put("COGNIZANT TECHNOLOGY SOLUTIONS", "A6F");
    typesHash.put("COHERENT, INC.", "ARR");
    typesHash.put("COLDWATER CREEK", "0YQ");
    typesHash.put("COLE HAAN", "B38");
    typesHash.put("COLINX LLC", "AIM");
    typesHash.put("COLLECTION COMPANY OF AMERICA", "0X3");
    typesHash.put("COLLEGE OF NEW ROCHELLE", "0CS");
    typesHash.put("COLLEGE OF ST. BENEDICT", "0FQ");
    typesHash.put("COLLIN COUNTY COMMUNITY COLLEGE", "AN5");
    typesHash.put("COLONIAL PIPELINE COMPANY", "09C");
    typesHash.put("COLORADO COLLEGE", "APJ");
    typesHash.put("COLORADO HEALTH AND HOSPITAL ASCN", "BCG");
    typesHash.put("COLUMBUS REGIONAL HEALTHCARE SYSTEM", "0KP");
    typesHash.put("COMCAST", "017");
    typesHash.put("COMCAST SPECTACOR", "BB7");
    typesHash.put("COMERICA, INC.", "AV1");
    typesHash.put("COMMISSIONED OFFICERS ASSOCIATION O", "BYT");
    typesHash.put("COMMONWEALTH OF PENNSYLVANIA AUTO&H", "B4P");
    typesHash.put("COMMONWEALTH OF VIRGINIA", "AZW");
    typesHash.put("COMMONWEALTH PURCHASING GROUP LLC", "BLH");
    typesHash.put("COMMUNITY CARE PHYSICIANS", "0OF");
    typesHash.put("COMMUNITY COLLEGE OF RI ALUMNI", "BVJ");
    typesHash.put("COMMUNITY HEALTH NETWORK", "03Q");
    typesHash.put("COMMUNITY HIGH SCHOOL DISTRICT 218", "BWV");
    typesHash.put("COMMUNITY NEWSPAPER COMPANY", "AOT");
    typesHash.put("COMPASS BANK", "ANV");
    typesHash.put("COMPASS GROUP", "BWM");
    typesHash.put("COMPASS MINERALS GROUP", "ASI");
    typesHash.put("COMPUCOM SYSTEMS, INC.", "0W4");
    typesHash.put("COMPUTER AID INC", "BI2");
    typesHash.put("COMPUTERSHARE INVESTOR SERVICES", "A32");
    typesHash.put("COMPUWARE CORPORATION", "0KR");
    typesHash.put("COMVERSE INC.", "0A9");
    typesHash.put("CON EDISON", "017");
    typesHash.put("CON EDISON ENERGY", "017");
    typesHash.put("CONAGRA FOODS, INC.", "BGV");
    typesHash.put("CONAIR CORPORATION", "BK2");
    typesHash.put("CONCERTO SOFTWARE", "ATR");
    typesHash.put("CONCORD HOSPITALITY, INC.", "BA9");
    typesHash.put("CONE HEALTH", "A53");
    typesHash.put("CONFORMIS INC", "B4X");
    typesHash.put("CONN. STATE UNIV PROFESSORS", "A8R");
    typesHash.put("CONSERVATIVE50 PLUS", "BV7");
    typesHash.put("CONSOL ENERGY", "A5R");
    typesHash.put("CONSOLIDATED CONTAINER COMPANY LLC", "BF2");
    typesHash.put("CONTINENTAL AG", "0WD");
    typesHash.put("CONTINENTAL AIRLINES, INC.", "AMH");
    typesHash.put("CONTINENTAL GROUP", "BZX");
    typesHash.put("CONTINENTAL HEALTHCARE SYSTEMS INC.", "205");
    typesHash.put("CONTINENTAL MATERIALS GROUP DEL", "A1C");
    typesHash.put("CONTINUUM HEALTH ALLIANCE, LLC", "BSR");
    typesHash.put("CONVATEC", "BWY");
    typesHash.put("CONVERGYS", "AXX");
    typesHash.put("COOSA VALLEY MEDICAL CENTER", "A0X");
    typesHash.put("COPMEA", "BH2");
    typesHash.put("CORBIN RUSSWIN, INC.", "0CD");
    typesHash.put("CORELOGIC INC", "BPD");
    typesHash.put("CORINTHIAN COLLEGES, INC", "017");
    typesHash.put("CORNELL MEDICAL CENTER", "017");
    typesHash.put("CORNELL UNIVERSITY 78", "017");
    typesHash.put("CORNING GILBERT, INC.", "AVJ");
    typesHash.put("CORPORATE EXECUTIVE BOARD", "AV8");
    typesHash.put("CORRECT CARE SOLUTIONS LLC", "BMT");
    typesHash.put("CORVEL CORPORATION", "BB6");
    typesHash.put("COTT BEVERAGES USA", "APU");
    typesHash.put("COUNTY OF MENDOCINO", "BA3");
    typesHash.put("COVAD COMMUNICATIONS", "BAL");
    typesHash.put("COVIDIEN", "06J");
    typesHash.put("CPS SECURITY", "BZW");
    typesHash.put("CREDIT CONTROL SERVICES", "0LQ");
    typesHash.put("CREDIT SUISSE USA, INC.", "BVZ");
    typesHash.put("CREE, INC.", "AP3");
    typesHash.put("CRESCENT REAL ESTATE EQUITIES", "A75");
    typesHash.put("CRICKET COMMUNICATIONS, INC", "A7L");
    typesHash.put("CRITTENDEN MEMORIAL HOSPITAL", "AW6");
    typesHash.put("CRODA, INC.", "AMT");
    typesHash.put("CROUSE HOSPITAL", "BST");
    typesHash.put("CROWLEY MARITIME CORPORATION", "0HP");
    typesHash.put("CRUMP INSURANCE", "A1T");
    typesHash.put("CSC APPLIED TECHNOLOGIES", "A68");
    typesHash.put("CSEA SEIU LOCAL 2001760", "BAR");
    typesHash.put("CSL BEHRING", "B3J");
    typesHash.put("CSX CORPORATION", "088");
    typesHash.put("CTI", "AMS");
    typesHash.put("CUBA MEMORIAL HOSPITAL", "0U7");
    typesHash.put("CULLMAN REGIONAL MEDICAL CENTER", "BO6");
    typesHash.put("CUMBERLAND COUNTY SCHOOLS", "08G");
    typesHash.put("CURTISS-WRIGHT CORPORATION", "BMF");
    typesHash.put("CUSHMAN & WAKEFIELD", "AY9");
    typesHash.put("CUTTER & BUCK", "AH5");
    typesHash.put("CV INDUSTRIES", "AQ5");
    typesHash.put("CVS- PART TIME EMPLOYEES", "017");
    typesHash.put("CYBEX INTERNATIONAL", "017");
    typesHash.put("CYCLING SPORTS GROUP", "0A6");
    typesHash.put("CYMER, INC.", "AJS");
    typesHash.put("CYPRESS HEALTH GROUP", "BUJ");
    typesHash.put("D & S CONSULTANTS, INC.", "B4A");
    typesHash.put("D&S CONSULTANTS, INC.", "B4A");
    typesHash.put("DAIICHI SANKYO, INC.", "AU9");
    typesHash.put("DAIMLER TRUCKS OF NORTH AMERICA", "BAE");
    typesHash.put("DAK AMERICAS LLC", "BBY");
    typesHash.put("DALTON SCHOOLS", "A4W");
    typesHash.put("DANA-FARBER CANCER INSTITUTE", "AHG");
    typesHash.put("DANAHER CORPORATION", "BNU");
    typesHash.put("DANIEL J. EDELMAN, INC.", "AV5");
    typesHash.put("DARDEN RESTAURANTS INC.", "AST");
    typesHash.put("DARTMOUTH PRINTING", "0SU");
    typesHash.put("DATACARD CORPORATION", "BQH");
    typesHash.put("DATALOGIC SCANNING, INC", "A7H");
    typesHash.put("DATAMATICS CONSULTANTS, INC.", "0PN");
    typesHash.put("DATCU CREDIT UNION", "B59");
    typesHash.put("DAVID EVANS & ASSOCIATES", "BOO");
    typesHash.put("DAVID'S BRIDAL", "BWD");
    typesHash.put("DAVITA, INC.", "A6T");
    typesHash.put("DAVOL, INC.", "0XH");
    typesHash.put("DAWN FOOD PRODUCTS", "0TR");
    typesHash.put("DAYTON CHILDREN'S", "B3Y");
    typesHash.put("DAYTON FREIGHT LINES", "BE1");
    typesHash.put("DECATUR MEMORIAL HOSPITAL", "AL6");
    typesHash.put("DEER VALLEY SCHOOL DISTRICT", "AWJ");
    typesHash.put("DEFFENBAUGH INDUSTRIES INC.", "BJK");
    typesHash.put("DEKALB MEDICAL CENTER", "BXH");
    typesHash.put("DELAGE LANDEN FINANCIAL SERV., INC.", "AR0");
    typesHash.put("DELAWARE PARK MANAGEMENT COMPANY", "B2B");
    typesHash.put("DELAWARE RIVER & BAY AUTHORITY", "A01");
    typesHash.put("DELAWARE VALLEY HOSPITAL", "0EG");
    typesHash.put("DELHAIZE AMERICA, LLC", "01C");
    typesHash.put("DELL", "BC3");
    typesHash.put("DELTA AIRLINES", "BOE");
    typesHash.put("DELUXE CORPORATION", "0L7");
    typesHash.put("DENDREON CORPORATION", "B2F");
    typesHash.put("DENTSPLY", "BF3");
    typesHash.put("DENVER HEALTH & HOSPITAL", "0H5");
    typesHash.put("DENVER PUBLIC SCHOOLS", "AVR");
    typesHash.put("DENVER WHOLESALE FLORIST", "0H8");
    typesHash.put("DEPAUL UNIVERSITY", "0DK");
    typesHash.put("DEPENDABLE HIGHWAY EXPRESS", "B0L");
    typesHash.put("DEPUTY SHERIFFS ASSOC OF SAN DIEGO", "BZC");
    typesHash.put("DESA HEATING, LLC", "AU1");
    typesHash.put("DESERET MUTUAL BENEFIT ADMIN", "0FN");
    typesHash.put("DESERET MUTUAL BENEFIT ADMIN", "0FN");
    typesHash.put("DESERET MUTUAL BENEFIT ADMIN", "0FN");
    typesHash.put("DESERET MUTUAL BENEFIT ADMIN", "0FN");
    typesHash.put("DESERET MUTUAL BENEFIT ADMIN", "0FN");
    typesHash.put("DESERET MUTUAL BENEFIT ADMIN", "0FN");
    typesHash.put("DESERET MUTUAL BENEFIT ADMIN", "0FN");
    typesHash.put("DESERET MUTUAL BENEFIT ADMIN", "0FN");
    typesHash.put("DESERET MUTUAL BENEFIT ADMIN", "0FN");
    typesHash.put("DESERET MUTUAL BENEFIT ADMIN", "0FN");
    typesHash.put("DESERET MUTUAL BENEFIT ADMIN", "0FN");
    typesHash.put("DESERET MUTUAL BENEFIT ADMIN", "0FN");
    typesHash.put("DESERET MUTUAL BENEFIT ADMIN", "0FN");
    typesHash.put("DESERET MUTUAL BENEFIT ADMIN", "0FN");
    typesHash.put("DESERET MUTUAL BENEFIT ADMIN", "0FN");
    typesHash.put("DEUTSCH INC.", "AC3");
    typesHash.put("DEVRY INC.", "0JB");
    typesHash.put("DEX ONE CORPORATION", "0OP");
    typesHash.put("DIAGEO NORTH AMERICA", "A0Z");
    typesHash.put("DIALOGIC INC", "BKJ");
    typesHash.put("DICK CORPORATION", "AR2");
    typesHash.put("DICKINSON COLLEGE", "0FT");
    typesHash.put("DIGITAL RIVER", "BHW");
    typesHash.put("DIGNITY HEALTH", "017");
    typesHash.put("DIMENSION DATA", "AYF");
    typesHash.put("DIOCESE OF BUFFALO", "0RO");
    typesHash.put("DIOCESE OF METUCHEN", "BPN");
    typesHash.put("DISCOVER FINANCIAL SERVICES INC", "BG1");
    typesHash.put("DISCOVERY COMMUNICATIONS, LLC.", "0HN");
    typesHash.put("DISH NETWORK", "B0H");
    typesHash.put("DISNEY", "017");
    typesHash.put("DISTRICT COUNCIL 21", "BRS");
    typesHash.put("DISTRICT COUNCIL 37", "BB0");
    typesHash.put("DIVERSIFIED HUMAN RESOURCES", "BWZ");
    typesHash.put("DIXON TICONDEROGA", "AA0");
    typesHash.put("DJO, LLC", "AZP");
    typesHash.put("DMN MANAGEMENT", "BAF");
    typesHash.put("DOCTORS HOSPITAL OF SARASOTA", "0B2");
    typesHash.put("DOLCE INTERNATIONAL HOLDINGS", "A0G");
    typesHash.put("DOLE FOOD COMPANY, INC.", "AUB");
    typesHash.put("DOLEX DOLLAR EXPRESS, INC", "BPW");
    typesHash.put("DOMINION RESOURCES, INC.", "ATF");
    typesHash.put("DORMAN PRODUCTS,INC", "0VT");
    typesHash.put("DOUGLAS AUTOTECH CORP.", "0G0");
    typesHash.put("DOUGLAS MACHINE", "0SO");
    typesHash.put("DOWLING COLLEGE", "0MK");
    typesHash.put("DPR CONSTRUCTION", "A9E");
    typesHash.put("DPR REALTY", "BZV");
    typesHash.put("DRAPER LABS", "017");
    typesHash.put("DREW MEMORIAL HOSPITAL", "AI3");
    typesHash.put("DRIL-QUIP, INC.", "B3H");
    typesHash.put("DRISCOLL CHILDRENS HOSPITAL", "BFN");
    typesHash.put("DSM NUTRITIONAL PRODUCTS", "A2L");
    typesHash.put("DST SYSTEMS, INC.", "ALU");
    typesHash.put("DTE ENERGY", "0RC");
    typesHash.put("DUCKS UNLIMITED", "BW5");
    typesHash.put("DUFF & PHELPS", "BJJ");
    typesHash.put("DUKE REALTY CORP.", "BGW");
    typesHash.put("DUKE UNIVERSITY", "017");
    typesHash.put("DUN & BRADSTREET", "084");
    typesHash.put("DUNN EDWARDS CORP", "BJ5");
    typesHash.put("DUPONT .", "017");
    typesHash.put("DURHAM TECHNICAL COMMUNITY COLLEGE", "0MA");
    typesHash.put("DYNAMICS RESEARCH CORP", "08E");
    typesHash.put("DYNCORP", "0QG");
    typesHash.put("EARTH COLOR GROUP", "0T3");
    typesHash.put("EAST ALABAMA MEDICAL CENTER", "09S");
    typesHash.put("EAST KENTUCKY POWER COOPERATIVE", "AVW");
    typesHash.put("EASTERN NEW MEXICO UNIVERSITY", "AGO");
    typesHash.put("EATON VANCE", "A6U");
    typesHash.put("ECCO USA, INC.", "BPA");
    typesHash.put("ECFMG", "A6P");
    typesHash.put("ECHO SPHERE CORPORATION", "AQS");
    typesHash.put("ECOLAB", "017");
    typesHash.put("ECONOMIST NEWSPAPER GROUP INC.", "AOO");
    typesHash.put("EDDIE BAUER LLC", "A43");
    typesHash.put("EDGECOMBE COMMUNITY COLLEGE", "0GZ");
    typesHash.put("EECU CREDIT UNION", "B6Q");
    typesHash.put("EFI", "BEB");
    typesHash.put("EISAI CORPORATION OF NORTH AMERICA", "BVQ");
    typesHash.put("EISNER LLP", "0JU");
    typesHash.put("ELBIT SYSTEMS OF AMERICA INC.", "BC4");
    typesHash.put("ELCOM INTERNATIONAL", "0DP");
    typesHash.put("ELECTROLUX", "0FC");
    typesHash.put("EA", "BJL");
    typesHash.put("ELECTRONIC ARTS", "BJL");
    typesHash.put("ELKAY MANUFACTURING", "08F");
    typesHash.put("ELKHART GENERAL HOSPITAL", "ABL");
    typesHash.put("ELKS", "BSM");
    typesHash.put("ELMHURST MEMORIAL HOSPITAL", "BBU");
    typesHash.put("ELWYN INC", "B13");
    typesHash.put("EMC CORPORATION", "BLK");
    typesHash.put("EMD MILLIPORE CORPORATION", "AN3");
    typesHash.put("EMERGENCY CONSULTANTS", "BOP");
    typesHash.put("EMERGENCY MEDICINE PHYSICIANS", "0X9");
    typesHash.put("EMERGENCY NURSES ASSOCIATION", "BUC");
    typesHash.put("EMERITUS CORPORATION", "017");
    typesHash.put("EMERSON ELECTRIC CO.", "02K");
    typesHash.put("EMERSON SWAN, INC.", "AIV");
    typesHash.put("EMMIS COMMUNICATIONS", "BEO");
    typesHash.put("EMORY HEALTHCARE", "01G");
    typesHash.put("EMORY UNIVERSITY", "01F");
    typesHash.put("EMPIRE VISION CENTER INC", "BD9");
    typesHash.put("EMPIRIAN PROPERTY MANAGEMENT", "BBK");
    typesHash.put("EMPIRIX", "AGG");
    typesHash.put("EMPLOYEE ASSOCIATION VA LOMA LINDA", "BEX");
    typesHash.put("EMPLOYEE PROFESSIONALS", "BTR");
    typesHash.put("ENCANA OIL & GAS (USA) INC.", "BYB");
    typesHash.put("ENERCON SERVICES, INC.", "ATE");
    typesHash.put("ENERGIZER HOLDINGS, INC.", "AKO");
    typesHash.put("ENGILITY", "017");
    typesHash.put("ENGLEWOOD HOSPITAL & MEDICAL CENTER", "0FW");
    typesHash.put("ENHERENT", "AE9");
    typesHash.put("ENOVAPREMIER, LLC", "AKT");
    typesHash.put("ENSCO, INC.", "AJI");
    typesHash.put("ENSIGN SERVICES, INC.", "B4B");
    typesHash.put("ENSIGN-BICKFORD INDUSTRIES", "AIN");
    typesHash.put("ENTERGY SERVICES INC.", "0QS");
    typesHash.put("ENTERTAINMENT CONSUMER ASSOCIATION", "B57");
    typesHash.put("ENVISION HEALTHCARE CORPORATION", "ARO");
    typesHash.put("EPHRAIM MCDOWELL REGIONAL MED CTR", "BKA");
    typesHash.put("EQUINOX PAYMENTS", "AIQ");
    typesHash.put("EQUITY RESIDENTIAL SERVICES, L.L.C.", "AWO");
    typesHash.put("ERICKSON LIVING MANAGEMENT LLC", "BW9");
    typesHash.put("ESCO CORPORATION", "BR1");
    typesHash.put("ESSEX GROUP MANAGEMENT", "0RQ");
    typesHash.put("ETHAN ALLEN", "06F");
    typesHash.put("EURAMAX", "BR5");
    typesHash.put("EVERBRITE, LLC", "09R");
    typesHash.put("EVOLVING SYSTEMS, INC.", "0PE");
    typesHash.put("EVONIK DEGUSSA CORPORATION", "AUH");
    typesHash.put("EXELIS, INC.", "017");
    typesHash.put("EXELIXIS INC", "A0K");
    typesHash.put("EXELON CORPORATION", "BEC");
    typesHash.put("EXETER HEALTH RESOURCES", "0UP");
    typesHash.put("EXIDE TECHNOLOGIES", "0BS");
    typesHash.put("EXPERIAN INFORMATION SOLUTIONS, INC", "017");
    typesHash.put("EXPRESS MESSENGER", "BLL");
    typesHash.put("EXPRESS SCRIPTS", "AWQ");
    typesHash.put("EXTENDICARE HEALTH SERVICES, INC.", "B41");
    typesHash.put("EXTENSIS", "A4F");
    typesHash.put("EXTREME NETWORKS", "BGA");
    typesHash.put("F&P AMERICA MFG., INC", "BLJ");
    typesHash.put("F & P AMERICA MFG., INC", "BLJ");
    typesHash.put("FABICK CAT", "BZI");
    typesHash.put("FACTSET RESEARCH SYSTEMS", "AZJ");
    typesHash.put("FAIR ISAAC CORPORATION", "A18");
    typesHash.put("FAIR- RITE PRODUCTS CORPORATION", "0XM");
    typesHash.put("FAIRFIELD MEDICAL CENTER", "044");
    typesHash.put("FAIRFIELD UNIVERSITY", "AFS");
    typesHash.put("FAIRPOINT COMMUNICATIONS", "BGB");
    typesHash.put("FARGO ASSEMBLY OF PA", "B5T");
    typesHash.put("FARMERS NATIONAL COMPANY", "123");
    typesHash.put("FASTENAL COMPANY", "BEP");
    typesHash.put("FAYETTEVILLE TECHNICAL COMM COLLEGE", "AZS");
    typesHash.put("FAZOLI'S RESTAURANTS LLC", "BTE");
    typesHash.put("FCCI INSURANCE", "BBR");
    typesHash.put("FCI USA, LLC", "08H");
    typesHash.put("FEDERAL EXPRESS CORPORATION", "0IY");
    typesHash.put("FEDERAL FIRST", "BDH");
    typesHash.put("FEDERAL MOGUL", "02P");
    typesHash.put("FEDERAL RESERVE BANK", "017");
    typesHash.put("FEDERAL SIGNAL CORPORATION", "0C8");
    typesHash.put("FEDEX CUSTOM CRITICAL", "AWV");
    typesHash.put("FEDEX FREIGHT", "BDS");
    typesHash.put("FEDEX GROUND", "AIT");
    typesHash.put("FEDEX OFFICE", "A5N");
    typesHash.put("FEDEX SUPPLY CHAIN SYSTEMS, INC.", "AWT");
    typesHash.put("FENNER DUNLOP", "A5V");
    typesHash.put("FFMC/FDC", "01W");
    typesHash.put("FIDELITY INVESTMENTS", "0EB");
    typesHash.put("FIDELITY TECHNOLOGIES CORPORATION", "B31");
    typesHash.put("FIFTH THIRD BANK", "017");
    typesHash.put("FINANCIAL PLANNING ASSOCIATION", "B2E");
    typesHash.put("FIRST ALERT PROFESSIONAL SECURITY", "AZ4");
    typesHash.put("FIRST AMERICAN CORPORATION", "A6Z");
    typesHash.put("FIRST CITIZENS BANK & TRUST COMPANY", "A5I");
    typesHash.put("FIRST COMMONWEALTH FINANCIAL CORP", "BCY");
    typesHash.put("FIRST COMMUNITY BANK", "BIJ");
    typesHash.put("FIRST DATA INVESTOR SERVICES", "07F");
    typesHash.put("FIRST ENERGY", "017");
    typesHash.put("FIRST MIDWEST BANK", "A52");
    typesHash.put("FIRST TECH FEDERAL CREDIT UNION", "A9S");
    typesHash.put("FIRST TENNESSEE BANK", "0IG");
    typesHash.put("FIRSTHEALTH OF THE CAROLINAS", "0A5");
    typesHash.put("FIRSTMERIT CORPORATION", "A9P");
    typesHash.put("FISERV", "057");
    typesHash.put("FLEXTRONICS INTERNATIONAL USA", "BML");
    typesHash.put("FLORIDA BANKERS ASSOCIATION", "BQF");
    typesHash.put("FLORIDA DEPARTMENT OF EDUCATION", "05U");
    typesHash.put("FLORIDA RETIRED EDUCATOR ASSOC", "BQI");
    typesHash.put("FLSMIDTH INC", "BG5");
    typesHash.put("FLUOR CORPORATION", "AH0");
    typesHash.put("FMC TECHNOLOGIES", "ATM");
    typesHash.put("FOCUS HR", "BZ6");
    typesHash.put("FOOT LOCKER INC.", "BBG");
    typesHash.put("FORD MOTOR COMPANY 80", "017");
    typesHash.put("FOREST LABS", "0Q2");
    typesHash.put("FORMOSA PLASTICS CORPORATION, USA", "ACF");
    typesHash.put("FORRESTER RESEARCH, INC.", "ACS");
    typesHash.put("FORSYTH COUNTY SCHOOLS", "04K");
    typesHash.put("FORT OSAGE SCHOOL DISTRICT", "0Q4");
    typesHash.put("FORTNEY & WEYGANDT", "AG2");
    typesHash.put("FOX, INC", "017");
    typesHash.put("FPM LP", "0A0");
    typesHash.put("FRANCISCAN ALLIANCE", "0ZV");
    typesHash.put("FRANCISCAN SISTERS", "BGZ");
    typesHash.put("FRANKCRUM", "B0Q");
    typesHash.put("FRANKLIN TEMPLETON GROUP", "AJ6");
    typesHash.put("FRED A MORETON AND COMPANY", "0BK");
    typesHash.put("FREEDOM COMMUNICATIONS", "AMX");
    typesHash.put("FREEPORT HEALTH NETWORK", "0LD");
    typesHash.put("FREEPORT MCMORAN", "AMG");
    typesHash.put("FREESCALE SEMICONDUCTOR INC.", "BRZ");
    typesHash.put("FREMONT - RIDEOUT HEALTH GROUP", "BXG");
    typesHash.put("FRESENIUS KABI USA, LLC", "0TB");
    typesHash.put("FREUDENBERG-NOK", "017");
    typesHash.put("FRONTIER COMMUNICATIONS", "BP0");
    typesHash.put("FUJI PHOTO FILM USA, INC", "B5V");
    typesHash.put("FUJITSU MGMT SVCS OF AMERICA", "0H7");
    typesHash.put("FUNDAMENTAL AKA TRANS HEALTHCARE", "A7O");
    typesHash.put("GAMBRO RENAL PRODUCTS", "BLU");
    typesHash.put("GAMESTOP STORES", "BG6");
    typesHash.put("GANDER MOUNTAIN", "BR2");
    typesHash.put("GANNETT CO INC", "BPT");
    typesHash.put("GARDNER DENVER", "B10");
    typesHash.put("GARMIN INTERNATIONAL", "AIG");
    typesHash.put("GARTNER", "09X");
    typesHash.put("GATX CORPORATION", "AVO");
    typesHash.put("GEBA", "BKO");
    typesHash.put("GEMTRON", "0YF");
    typesHash.put("GENENTECH, INC.", "ALT");
    typesHash.put("GENERAL DYNAMICS", "0JD");
    typesHash.put("GENERAL FEDERATION OF WOMENS CLUBS", "BSQ");
    typesHash.put("GENERAL MILLS", "0QK");
    typesHash.put("GENERAL MOTORS", "BYY");
    typesHash.put("GENERAL PUBLIC GPC", "09Z");
    typesHash.put("GENERATION AMERICA, LLC", "BZ9");
    typesHash.put("GENEX SERVICES, INC.", "0FD");
    typesHash.put("GENOMIC HEALTH INC.", "BPV");
    typesHash.put("GENTIVA", "AB5");
    typesHash.put("GENZYME CORPORATION", "BHZ");
    typesHash.put("GEORGE MASON UNIVERSITY", "01S");
    typesHash.put("GEORGETOWN UNIVERSITY", "BLF");
    typesHash.put("GEORGIA REINSURANCE DIRECT BILL", "01N");
    typesHash.put("GEORGIA STATE UNIVERSITY", "BWE");
    typesHash.put("GERSON LEHRMAN GROUP, INC", "BQ3");
    typesHash.put("GETTY IMAGES INC.", "A3T");
    typesHash.put("GIRLING HEALTHCARE, INC.", "0SQ");
    typesHash.put("GIVAUDAN CORPORATION", "0OS");
    typesHash.put("GLAXOSMITHKLINE", "017");
    typesHash.put("GLOBAL AVIATION HOLDINGS, INC.", "BJR");
    typesHash.put("GLOBAL BRASS AND COPPER", "BIB");
    typesHash.put("GLOBAL CASH ACCESS", "0QI");
    typesHash.put("GLOBAL IMAGING SYSTEMS, INC.", "AEP");
    typesHash.put("GLOBAL KNOWLEDGE NETWORK", "0BY");
    typesHash.put("GLOBAL PAYMENTS", "BBP");
    typesHash.put("GLYNN COUNTY BOC", "BXE");
    typesHash.put("GOLDEN LIVING", "BEA");
    typesHash.put("GOLDENWEST FEDERAL CREDIT UNION", "B5A");
    typesHash.put("GOOD SAMARITAN HOSPITAL MEDICAL CTR", "0XN");
    typesHash.put("GOODMAN MANUFACTURING", "B1W");
    typesHash.put("GOODWILL INDUSTRIES - SUNCOAST", "BZE");
    typesHash.put("GOOGLE INC", "A51");
    typesHash.put("GRAEBEL COMPANIES", "ATJ");
    typesHash.put("GRAHAM PACKAGING COMPANY", "017");
    typesHash.put("GRAND VIEW HOSPITAL", "ADM");
    typesHash.put("GRANT THORNTON LLP", "0E2");
    typesHash.put("GRANVILLE COUNTY SCHOOLS", "AUW");
    typesHash.put("GRAYBAR ELECTRIC", "08S");
    typesHash.put("GREAT RIVER ENERGY", "B3K");
    typesHash.put("GREATWIDE LOGISICS SERVICES INC", "A93");
    typesHash.put("GREEN BAY PACKAGING, INC.", "06D");
    typesHash.put("GREEN TREE SERVICING LLC", "BHU");
    typesHash.put("GREENBRIER COMPANIES", "0YB");
    typesHash.put("GREENWICH HOSPITAL", "0IM");
    typesHash.put("GRIFFITH LABORATORIES", "0MJ");
    typesHash.put("GRIFOLS INC.", "AE0");
    typesHash.put("GROUP HEALTH INCORPORATED", "0UQ");
    typesHash.put("GROUP M", "ACI");
    typesHash.put("GROUP MANAGEMENT SERVICES", "BUO");
    typesHash.put("GROUPE STAHL", "BJ9");
    typesHash.put("GROVE HILL MEDICAL CENTER", "0HZ");
    typesHash.put("GSE SYSTEMS", "AVB");
    typesHash.put("GTECH CORPORATION", "AIB");
    typesHash.put("GUARANTY BANK FSB", "BI4");
    typesHash.put("GUIDELINE", "A7Y");
    typesHash.put("GULF COAST HEALTH CARE", "BUP");
    typesHash.put("GUNDERSEN HEALTH SYSTEM", "A11");
    typesHash.put("GWINNETT COUNTY BOARD OF EDUCATION", "BSO");
    typesHash.put("GZA GEO ENVIRONMENTAL TECHNOLOGIES", "0DZ");
    typesHash.put("H&M", "BJX");
    typesHash.put("H&R BLOCK", "09B");
    typesHash.put("H. P. HOOD", "017");
    typesHash.put("HP HOOD", "017");
    typesHash.put("HACKENSACK UNIV. MEDICAL CTR", "A09");
    typesHash.put("HAIN CELESTIAL GROUP", "A2W");
    typesHash.put("HALLIBURTON COMPANY", "B0R");
    typesHash.put("HALLMARK CARDS INC.", "0P6");
    typesHash.put("HALLMARK HEALTH SYSTEMS", "0QC");
    typesHash.put("HAMBLEN COUNTY BOARD OF EDUCATION", "AQY");
    typesHash.put("HAMPTON CITY SCHOOLS", "BM2");
    typesHash.put("HANCOCK HOLDING CO.", "AUI");
    typesHash.put("HANFORD RECREATION ASSOCIATION", "A3X");
    typesHash.put("HANOVER DIRECT INC", "BCK");
    typesHash.put("HAPAG LLOYD", "A7J");
    typesHash.put("HARBOR ONE CREDIT UNION", "A3Y");
    typesHash.put("HARBORSTONE CREDIT UNION", "BTL");
    typesHash.put("HARD ROCK CAFE INTERNATIONAL", "A88");
    typesHash.put("HARDING UNIVERSITY", "BM0");
    typesHash.put("HARLEY-DAVIDSON, INC.", "0IC");
    typesHash.put("HARPER HOSPITAL", "0IP");
    typesHash.put("HARRIS CORPORATION", "0D0");
    typesHash.put("HARRISON COUNTY BOARD OF EDUCATION", "A5Z");
    typesHash.put("HARVARD UNIVERSITY", "017");
    typesHash.put("HARVEY INDUSTRIES", "BB1");
    typesHash.put("HASBRO, INC.", "01T");
    typesHash.put("HAVAS", "ANX");
    typesHash.put("HAVERTY FURNITURE", "BP6");
    typesHash.put("HAWKER PACIFIC AEROSPACE", "AMY");
    typesHash.put("HAWORTH, INC.", "09Q");
    typesHash.put("HAYWOOD COMMUNITY COLLEGE", "0I7");
    typesHash.put("HCA HEALTHCARE CORP.", "017");
    typesHash.put("HCC INDUSTRIES", "A0U");
    typesHash.put("HCL AMERICA, INC.", "B52");
    typesHash.put("HD SUPPLY", "BFE");
    typesHash.put("HEADSTRONG", "A2S");
    typesHash.put("HEALTH AND HOSPITAL CORPORATION", "A87");
    typesHash.put("HEALTH CARE SERVICE CORPORTATION", "BLS");
    typesHash.put("HEALTH EAST", "0BO");
    typesHash.put("HEALTH MANAGEMENT", "BVC");
    typesHash.put("HEALTH NET, INC.", "017");
    typesHash.put("HEALTH PARTNERS", "0N4");
    typesHash.put("HEALTH PARTNERS CENTRAL MN CLINICS", "0DI");
    typesHash.put("HEALTHCARE ASSOC. OF NY ST.", "0CA");
    typesHash.put("HEALTHNOW NY", "A0T");
    typesHash.put("HEALTHPLAN HOLDINGS INC.", "07H");
    typesHash.put("HEALTHSOUTH CORP", "BJY");
    typesHash.put("HEALTHY TRUCKING ASSOCIATION OF AME", "B6E");
    typesHash.put("HEARST CORPORATION", "A0H");
    typesHash.put("HEARTHSIDE FOOD SOLUTIONS", "BK8");
    typesHash.put("HEARTLAND EMPLOYMENT SERVICES", "BAZ");
    typesHash.put("HEINZ", "A07");
    typesHash.put("HENKEL OF AMERICA", "017");
    typesHash.put("HENNESSY AUTOMOBILE COMPANIES", "A6N");
    typesHash.put("HENRY SCHEIN, INC.", "BGL");
    typesHash.put("HENRY WURST", "BAY");
    typesHash.put("HENSLEY AND COMPANY", "0XS");
    typesHash.put("HERMAN MILLER INC", "AZE");
    typesHash.put("HERR FOODS INC", "BLE");
    typesHash.put("HERSHEY COMPANY", "B0V");
    typesHash.put("HERTZ", "017");
    typesHash.put("HERZOG CONTRACTING", "0UE");
    typesHash.put("HEWLETT-PACKARD, EDS", "080");
    typesHash.put("HH SUMCO", "0Q3");
    typesHash.put("HHGREGG", "BWF");
    typesHash.put("HIBU INC", "BR4");
    typesHash.put("HICKMAN COUNTY", "AAR");
    typesHash.put("HIGHLAND HOSPITAL", "ANG");
    typesHash.put("HILLERICH & BRADSBY CO.", "0W8");
    typesHash.put("HILLSBORO COMMUNITY MEDICAL CENTER", "0R6");
    typesHash.put("HILLSBOROUGH COMMUNITY COLLEGE", "B2W");
    typesHash.put("HILLSIDE CHILDREN'S CENTER", "0WM");
    typesHash.put("HILTON WORLDWIDE", "A0N");
    typesHash.put("HITACHI DATA SYSTEMS", "ASN");
    typesHash.put("HITCHINER MFG. CO.", "04V");
    typesHash.put("HMC/CAH CONSOLIDATED, INC", "B21");
    typesHash.put("HMS HOLDING LTD/HENDRICK MOTORSPORT", "BKC");
    typesHash.put("HNC SOFTWARE, INC.", "AF0");
    typesHash.put("HOAG MEMORIAL HOSPITAL", "BJS");
    typesHash.put("HOBART BROTHERS", "01Q");
    typesHash.put("HOLLAND AMERICA LINE N.V.", "BP4");
    typesHash.put("HOLLINGSWORTH AND VOSE", "0QX");
    typesHash.put("HOLLISTER", "BBV");
    typesHash.put("HOLY SPIRIT HEALTH SYSTEMS", "0YT");
    typesHash.put("HONDA OF AMERICA MFG INC", "017");
    typesHash.put("HONEYWELL", "0WN");
    typesHash.put("HONEYWELL -RETIREE", "ANE");
    typesHash.put("HOOD COLLEGE", "0YI");
    typesHash.put("HOOTERS CASINO HOTEL", "BLM");
    typesHash.put("HORIZON BC/BS OF NJ", "A8N");
    typesHash.put("HORIZON LINES LLC", "AT2");
    typesHash.put("HORIZON SOLUTIONS CORP.", "AK1");
    typesHash.put("HOSPITAL FOR SPECIAL CARE", "0L0");
    typesHash.put("HOUGHTON MIFFLIN", "BM8");
    typesHash.put("HOV SERVICES", "0VL");
    typesHash.put("HOWARD COUNTY HOSPITAL", "AO1");
    typesHash.put("HOWARD HUGHES MEDICAL INSTITUTE", "0EN");
    typesHash.put("HOWARD UNIVERSITY", "BLZ");
    typesHash.put("HRSOURCE, INC.", "0R3");
    typesHash.put("HSBC NORTH AMERICA HOLDINGS, INC", "AIS");
    typesHash.put("HUDSON VALLEY BANK", "ANN");
    typesHash.put("HUMAN GENOME SCIENCES INC", "BHH");
    typesHash.put("HUMAN KINETICS", "AHK");
    typesHash.put("HUMANA", "017");
    typesHash.put("HUMILITY OF MARY HEALTH PARTNERS", "BKS");
    typesHash.put("HUNTER CONTRACTING", "BFV");
    typesHash.put("HUNTER DOUGLAS", "AZ3");
    typesHash.put("HUNTERDON MEDICAL CENTER", "0PB");
    typesHash.put("HUNTINGTON HOSPITAL", "AD4");
    typesHash.put("HUNTON & WILLIAMS", "BQ1");
    typesHash.put("HURON CONSULTING GROUP", "AUT");
    typesHash.put("HUSSMANN CORPORATION", "BW7");
    typesHash.put("HYATT LEGAL PLANS", "BT9");
    typesHash.put("I FLY AMERICA, INC.", "BHD");
    typesHash.put("IBEW LOCAL 102", "BPB");
    typesHash.put("IBM", "017");
    typesHash.put("ICE GALLERY", "AXO");
    typesHash.put("ICF CONSULTING GROUP", "BJP");
    typesHash.put("IGATE CORPORATION", "BFU");
    typesHash.put("IGNITE RESTAURANT GROUP", "BWC");
    typesHash.put("IKON OFFICE SOLUTIONS", "AVA");
    typesHash.put("ILLINOIS ASSOCIATION OF REALTORS", "BBS");
    typesHash.put("ILLINOIS CENTRAL RAILROAD COMPANY", "BZN");
    typesHash.put("IMATION CORP", "BDQ");
    typesHash.put("IMERYS CORPORATION", "BRT");
    typesHash.put("IMS HEALTH INCORPORATED", "0KU");
    typesHash.put("INDEPENDENCE AIR", "A6K");
    typesHash.put("INDEPENDENT PILOTS ASSOCIATION", "07Q");
    typesHash.put("INDIANA MEMBERS CREDIT UNION OF IND", "BBO");
    typesHash.put("INDIANA RETIRED TEACHERS ASSOCIATIO", "BJ8");
    typesHash.put("INDIANA STATE EMPLOYEES ASSOCIATION", "A0P");
    typesHash.put("INDIANA UNIVERSITY", "017");
    typesHash.put("INDIANA UNIVERSITY HEALTH", "BLB");
    typesHash.put("INFINITY INSURANCE COMPANY", "BAA");
    typesHash.put("INFOCROSSING", "ASR");
    typesHash.put("INFORMA USA", "BOX");
    typesHash.put("INFORMATICA CORPORATION", "BPI");
    typesHash.put("INFORMATION RESOURCES", "0IL");
    typesHash.put("INFOSYS LIMITED", "A3G");
    typesHash.put("ING FINANCIAL SERVICES CORPORATION", "0UH");
    typesHash.put("INGALLS HEALTH SYSTEM", "BIS");
    typesHash.put("INGERSOLL RAND", "017");
    typesHash.put("INNOVIA FILMS INC.", "A3P");
    typesHash.put("INOVA HEALTH SYSTEM SERVICES", "BPP");
    typesHash.put("INSIGNIA RESIDENTIAL GRP/DOUGLAS EL", "AUL");
    typesHash.put("IN-SINK-ERATOR DIVISION EMERSON E", "A3V");
    typesHash.put("INST OF ELECTRICAL & ELECTRONIC ENG", "AH7");
    typesHash.put("INSTITUTIONAL INVESTOR", "A7E");
    typesHash.put("INSTRON", "0OH");
    typesHash.put("INSURANCE TRUST", "BLN");
    typesHash.put("INSURANCE TRUST FOR DELTA RETIREES", "BRC");
    typesHash.put("INSURITY INC.", "BY5");
    typesHash.put("INTEGRA LIFESCIENCES", "A1Y");
    typesHash.put("INTEGRATED DEVICE TECHNOLOGY, INC.", "BLG");
    typesHash.put("INTEGRATED ELECTRICAL SERVICES INC.", "BE0");
    typesHash.put("INTEGRATED MARKETING", "IM1");
    typesHash.put("INTEGRITY APPLICATIONS INC", "B2K");
    typesHash.put("INTEL CORPORATION", "0BX");
    typesHash.put("INTELSAT GLOBAL SERVICES CORP", "BBA");
    typesHash.put("INTERACTIVE DATA CORPORATION", "AL5");
    typesHash.put("INTERGEN", "ABS");
    typesHash.put("INTERGRAPH CORPORATION", "A36");
    typesHash.put("INTERMOUNTAIN GAS COMPANY", "A7F");
    typesHash.put("INTERMOUNTAIN HEALTH CARE", "01P");
    typesHash.put("INTERNATIONAL ASSOC OF RETIRED FIRE", "BSV");
    typesHash.put("INTERNATIONAL GAME TECHNOLOGY", "ARB");
    typesHash.put("INTERNATIONAL PAPER", "BQ6");
    typesHash.put("INTERNATIONAL RECTIFIER", "ASW");
    typesHash.put("INTERNATIONAL SEMATECH", "AL3");
    typesHash.put("INTERPUBLIC GROUP COMPANIES INC.", "BI3");
    typesHash.put("INTERSIL CORPORATION", "0WK");
    typesHash.put("INT'L UNION OF OPERATING ENGINEERS", "BKM");
    typesHash.put("INTRADO", "AER");
    typesHash.put("INTRAPAC, CORP.", "AW4");
    typesHash.put("INTUIT, INC.", "B51");
    typesHash.put("INVENSYS SYSTEMS", "0B4");
    typesHash.put("INX", "AL7");
    typesHash.put("ION MEDIA NETWORKS, INC", "BXK");
    typesHash.put("IONA COLLEGE", "AAM");
    typesHash.put("IPA ASSOCATION OF AMERICA", "BMH");
    typesHash.put("IRA DAVENPORT MEMORIAL HOSPITAL", "0CT");
    typesHash.put("IRI, ISG, INC.", "BUE");
    typesHash.put("IRIS GRAPHICS", "0MX");
    typesHash.put("IRVINE COMPANY", "BJH");
    typesHash.put("ISBA - RETIREES & BOARD MEMBERS", "BPH");
    typesHash.put("ISO NEW ENGLAND", "AX8");
    typesHash.put("ITRON, INC.", "0WR");
    typesHash.put("ITT CORPORATION", "017");
    typesHash.put("IVY TECH ALUMNI ASSOCIATION", "B0F");
    typesHash.put("J CREW", "BPG");
    typesHash.put("J.B. HUNT", "017");
    typesHash.put("J.JILL GROUP", "AQF");
    typesHash.put("J. JILL GROUP", "AQF");
    typesHash.put("J JILL GROUP", "AQF");
    typesHash.put("JACKSON GENERAL HOSPITAL", "A8P");
    typesHash.put("JACOBS AEROSPACE TESTING ALLIANCE", "017");
    typesHash.put("JACOBS ENGINEERING GROUP INC.", "017");
    typesHash.put("JACOBS TECHNOLOGY GROUP INC.", "017");
    typesHash.put("JACOBSEN CONSTRUCTION", "AA8");
    typesHash.put("JAFRA COSMETICS INTERNATIONAL, INC.", "AEL");
    typesHash.put("JAMES HARDIE BUILDING PRODUCTS", "A13");
    typesHash.put("JANE PHILIPS MEDICAL CENTER", "BSP");
    typesHash.put("JANUS CAPITAL GROUP", "BM1");
    typesHash.put("JARDEN CORPORATION", "A8H");
    typesHash.put("JARDINE INSURANCE BROKERS", "0BC");
    typesHash.put("JAZZ SEMICONDUCTOR", "AW3");
    typesHash.put("JBT CORPORTION", "BHP");
    typesHash.put("JEFFERIES GROUP LLC", "B42");
    typesHash.put("JEFFERSON CNTY PUBLIC SCHOOLS", "05D");
    typesHash.put("JEFFERSON COUNTY", "BJT");
    typesHash.put("JEFFERSON WELLS INTERNATIONAL", "ACG");
    typesHash.put("JETBLUE AIRWAYS", "A19");
    typesHash.put("JIM ELLIS", "BAQ");
    typesHash.put("JJ KELLER", "0F7");
    typesHash.put("JM FAMILY", "ARE");
    typesHash.put("JM MANUFACTURING COMPANY, INC", "ALC");
    typesHash.put("JO-ANN STORES", "A9G");
    typesHash.put("JOHN HANCOCK LIFE INSURANCE CO (USA)", "AXD");
    typesHash.put("JOHN J KIRLIN INC", "BHG");
    typesHash.put("JOHN MUIR HEALTH", "A38");
    typesHash.put("JOHN WILEY & SONS, INC.", "08X");
    typesHash.put("JOHN'S HOPKINS UNIVERSITY", "017");
    typesHash.put("JOHNSON & JOHNSON", "JNJ");
    typesHash.put("JOHNSON AND WALES UNIVERSITY", "ACE");
    typesHash.put("JOHNSON CONTROLS INC.", "AO0");
    typesHash.put("JOHNSON CONTROLS, INC. - DB ONLY", "AKJ");
    typesHash.put("JOHNSTON COUNTY SCHOOLS", "02Z");
    typesHash.put("JOHNSTON MEMORIAL HOSPITAL", "0F8");
    typesHash.put("JOINT COMMISSION", "ALR");
    typesHash.put("JOINT SCHOOL DISTRICT NO. 2", "A8O");
    typesHash.put("JONES LANG LASALLE", "BWA");
    typesHash.put("JORDAN VALLEY MEDICAL CENTER", "AFD");
    typesHash.put("JORDANS FURNITURE", "A5B");
    typesHash.put("JP MORGAN CHASE", "AUY");
    typesHash.put("JUNIPER NETWORKS, INC.", "BUL");
    typesHash.put("K. HOVNANIAN COMPANIES", "017");
    typesHash.put("K HOVNANIAN COMPANIES", "017");
    typesHash.put("KAISER PERMANENTE OF COLORADO", "AMA");
    typesHash.put("KALEIDA HEALTH", "0WW");
    typesHash.put("KANSAS CITY SOUTHERN", "BQA");
    typesHash.put("KANSAS HOSPITAL ASSOC.", "0P7");
    typesHash.put("KAO CORPORATION OF AMERICA", "0D3");
    typesHash.put("KAPSTONE PAPER AND PACKAGING CORP", "BRR");
    typesHash.put("KATUN CORPORATION", "0NH");
    typesHash.put("KAYSER-ROTH CORPORATION", "0WC");
    typesHash.put("KB HOME", "BS3");
    typesHash.put("KCG, INC.", "0RH");
    typesHash.put("KEENAN AND ASSOCIATES", "BJC");
    typesHash.put("KELLOGG COMPANY", "AXT");
    typesHash.put("KENNEY MANUFACTURING", "AIY");
    typesHash.put("KENTON COUNTY BOARD OF EDUCATION", "A8W");
    typesHash.put("KENTUCKYONE", "ASL");
    typesHash.put("KESSLER REHABILITATION CORPORATION", "0VB");
    typesHash.put("KETTERING HEALTH NETWORK", "BCR");
    typesHash.put("KEY FAMILY OF COMPANIES", "APB");
    typesHash.put("KEYSTONE AUTOMOTIVE OPERATIONS", "AKU");
    typesHash.put("KEYSTONE COLLEGE", "ATC");
    typesHash.put("KGP TELECOMMUNICATIONS, INC", "B0J");
    typesHash.put("KIA MOTORS MANUFACTURING GEORGIA", "BF5");
    typesHash.put("KIK CUSTOM PRODUCTS", "A5F");
    typesHash.put("KIMPTON HOTEL & RESTAURANT GROUP", "BQ4");
    typesHash.put("KIMSTAFFHR, INC.", "BG9");
    typesHash.put("KINDRED HEALTHCARE, INC.", "BYS");
    typesHash.put("KINECTA FEDERAL CREDIT UNION", "BXT");
    typesHash.put("KINECTA FEDERAL CREDIT UNION", "B2N");
    typesHash.put("KINGSTON HOSPITAL", "0T7");
    typesHash.put("KITCHELL CORP.", "ANO");
    typesHash.put("KLA-TENCOR", "AOR");
    typesHash.put("KLEINFELDER", "A2M");
    typesHash.put("KNAACK MANUFACTURING", "AS3");
    typesHash.put("KNIGHT CAPITAL GROUP", "AM3");
    typesHash.put("K OCH INDUSTRIES", "AG4");
    typesHash.put("KOHL'S", "017");
    typesHash.put("KOOTENAI MEDICAL CENTER", "B3F");
    typesHash.put("KOPPERS INC.", "A1N");
    typesHash.put("KPMG PEAT MARWICK", "04Z");
    typesHash.put("KPSS INC.", "A8F");
    typesHash.put("KRAFT FOOD GROUP, INC.", "017");
    typesHash.put("KRATON POLYMERS", "AGV");
    typesHash.put("KRONOS", "0FH");
    typesHash.put("L OCCITANE INC.", "BDB");
    typesHash.put("L'OCCITANE INC.", "BDB");
    typesHash.put("L-3", "017");
    typesHash.put("L3", "017");
    typesHash.put("LABORATORY CORPORATION", "AAE");
    typesHash.put("LABORERS INTERNATIONAL UNION OF NOR", "B5J");
    typesHash.put("LAHEY CLINIC", "0GL");
    typesHash.put("LAIRD, INC.", "AXF");
    typesHash.put("LAKE COUNTY", "A7V");
    typesHash.put("LAKE FOREST HOSPITAL", "AMZ");
    typesHash.put("LAKELAND REGIONAL HEALTH SYSTEMS", "0PK");
    typesHash.put("LAM RESEARCH CORP", "BVW");
    typesHash.put("LAMADELEINE", "BD3");
    typesHash.put("LANDEAU METROPOLITAN", "BXL");
    typesHash.put("LARSON-JUHL", "AR7");
    typesHash.put("LAWRENCE LIVERMORE NATIONAL LABORAT", "0VQ");
    typesHash.put("LAWRENCE MEMORIAL HOSPITAL", "A6V");
    typesHash.put("LAWRENCE REGIONAL HEALTH SYSTEM INC", "BII");
    typesHash.put("LAYNE CHRISTENSEN COMPANY", "ALM");
    typesHash.put("LCC INTERNATIONAL", "ACT");
    typesHash.put("LEACH & GARNER CO", "0ZC");
    typesHash.put("LEAKE AND WATTS", "BS9");
    typesHash.put("LEAR CORPORATION", "BFB");
    typesHash.put("LEE COUNTY", "054");
    typesHash.put("LEE MEMORIAL", "017");
    typesHash.put("LEGG MASON", "0E7");
    typesHash.put("LEGGETT & PLATT INC", "A47");
    typesHash.put("LEHIGH HANSON", "BRY");
    typesHash.put("LEHIGH VALLEY BUSINESS COALITION", "BX3");
    typesHash.put("LEHMAN BROTHERS, INC.", "AK4");
    typesHash.put("LEMOYNE COLLEGE", "0QF");
    typesHash.put("LEND LEASE", "AZ9");
    typesHash.put("LENNAR CORPORATION", "AL0");
    typesHash.put("LENOX HILL HOSPITAL", "0U9");
    typesHash.put("LEO A DALY", "BT5");
    typesHash.put("LEVEL 3 COMMUNICATIONS", "AO6");
    typesHash.put("LEVI STRAUSS & CO.", "BK5");
    typesHash.put("LEXMARK INTERNATIONAL, INC.", "AB4");
    typesHash.put("LG ELECTRONICS", "BBN");
    typesHash.put("LIBERTY MEDICAL", "A08");
    typesHash.put("LIFE TECHNOLOGIES CORPORATION", "BC1");
    typesHash.put("LIFECARE MANAGEMENT SERVICES", "BJE");
    typesHash.put("LIFECARE, INC", "ABO");
    typesHash.put("LIFE'S WORC", "BZ2");
    typesHash.put("LIFESOUTH COMMUNITY BLOOD CENTERS", "BKT");
    typesHash.put("LIFESPAN", "06Z");
    typesHash.put("LIFETIME BRANDS, INC.", "BYW");
    typesHash.put("LIFETIME HEALTH CARE COMPANIES", "0F4");
    typesHash.put("LIFEWAY CHRISTIAN RESOURCES", "0TE");
    typesHash.put("LIMITED BRANDS", "B04");
    typesHash.put("LINCOLN COUNTY BOARD OF EDUCATION", "A8A");
    typesHash.put("LINCOLN INDUSTRIES", "BD1");
    typesHash.put("LITTLER MENDELSON PC", "BAC");
    typesHash.put("LITTLETON SCHOOL DISTRICT", "BTC");
    typesHash.put("LIVINGSTON BOARD OF EDUCATION", "0TQ");
    typesHash.put("LL BEAN", "0N9");
    typesHash.put("LOCKHEED MARTIN", "017");
    typesHash.put("LOCKHEED MARTIN GLOBAL TELECOMM", "0JW");
    typesHash.put("LODGENET", "BMM");
    typesHash.put("LOGAN BUS COMPANY", "B4J");
    typesHash.put("LOGITECH INC.", "A7R");
    typesHash.put("LONG ISLAND HOME, LTD", "0A4");
    typesHash.put("LONGVIEW FIBRE", "BXO");
    typesHash.put("LORD CORPORATION", "BN6");
    typesHash.put("LOREAL USA INC.", "A4C");
    typesHash.put("LOTUSHR", "BCO");
    typesHash.put("LOWE'S COMPANIES, INC.", "AUP");
    typesHash.put("LOYOLA MARYMOUNT UNIVERSITY", "BLI");
    typesHash.put("LSG SKY CHEFS", "ASA");
    typesHash.put("LSI CORPORATION", "AKI");
    typesHash.put("LUBBOCK INDEPENDENT SCHOOL DISTRICT", "0H2");
    typesHash.put("LUCENT TECHNOLOGIES", "0MH");
    typesHash.put("LUFTHANSA TECHNIK NORTH AMERICA", "AOY");
    typesHash.put("LUFTHANSA USA", "ALI");
    typesHash.put("LUTHERAN MEDICAL CENTER", "BMA");
    typesHash.put("LVMH MOET HENNESSY LOUIS VUITTON, I", "BXV");
    typesHash.put("LYONDELLBASSELL", "017");
    typesHash.put("M&T BANK CORPORATION", "0BI");
    typesHash.put("M.A. MORTENSON COMPANY", "ADN");
    typesHash.put("MAC-GRAY CORPORATION", "A8C");
    typesHash.put("MACK ENERGY CORPORATION", "A5Y");
    typesHash.put("MACY'S CREDIT AND CUSTOMER SERVICES", "02W");
    typesHash.put("MACY'S SYSTEMS AND TECHNOLOGY, INC.", "0KM");
    typesHash.put("MADD", "0SD");
    typesHash.put("MADISON COUNTY BOARD OF EDUCATION", "A1A");
    typesHash.put("MAERSK LINE", "AG7");
    typesHash.put("MAGELLAN HEALTH SERVICES", "0T6");
    typesHash.put("MAGMA DESIGN AUTOMATION INC.", "A2J");
    typesHash.put("MAGNA INTERNATIONAL", "0X4");
    typesHash.put("MAINE MEDICAL ASSOCIATION", "A3L");
    typesHash.put("MAINES PAPER AND FOOD SERVICE, INC", "AOH");
    typesHash.put("MAJOR LEAGUE BASEBALL", "AE2");
    typesHash.put("MALLINCKRODT GROUP", "B3O");
    typesHash.put("MANAGEMENT AND TRAINING CORP", "0JP");
    typesHash.put("MANNINGTON MILLS", "BI1");
    typesHash.put("MANSFIELD INDEPENDENT SCHOOL DISTRI", "B3S");
    typesHash.put("MANTECH INTERNATIONAL", "A03");
    typesHash.put("MARATHON OIL COMPANY", "BUX");
    typesHash.put("MARATHON PETROLEUM OIL", "07L");
    typesHash.put("MARICOPA COUNTY", "BZY");
    typesHash.put("MARICOPA INTEGRATED HEALTH SYSTEM", "B2I");
    typesHash.put("MARINE BIOLOGICAL LABORATORY", "AP7");
    typesHash.put("MARINEMAX, INC.", "AR5");
    typesHash.put("MARION COUNTY", "053");
    typesHash.put("MARQUETTE MEDICAL SYSTEMS", "06E");
    typesHash.put("MARQUETTE UNIVERSITY", "09D");
    typesHash.put("MARSH & MCLENNAN", "017");
    typesHash.put("MARTIN COMMUNITY COLLEGE", "0Q6");
    typesHash.put("MARTIN MEMORIAL HEALTH SYSTEMS", "BNA");
    typesHash.put("MARVELL SEMICONDUCTOR GROUP", "BUW");
    typesHash.put("MARYWOOD UNIVERSITY", "0AZ");
    typesHash.put("MASSACHUSETTS CORRECTIONS OFFICERS", "BL8");
    typesHash.put("MASSACHUSETTS HOSPITAL", "043");
    typesHash.put("MASTERCARD WORLDWIDE", "APL");
    typesHash.put("MATERION CORPORATION", "A55");
    typesHash.put("MATHEMATICAL ASSOCIATION OF AMERICA", "BZ8");
    typesHash.put("MATRIX SERVICE COMPANY", "BDY");
    typesHash.put("MAVERICK TRANSPORTATION USA", "BA0");
    typesHash.put("MAXELL CORPORATION OF AMERICA", "ATV");
    typesHash.put("MAXIMUS INC", "A4L");
    typesHash.put("MAYER ELECTRIC SUPPLY SERVICING CO", "BHJ");
    typesHash.put("MB FINANCIAL INC.", "ANA");
    typesHash.put("MCAFEE, INC", "BU4");
    typesHash.put("MCDONALD'S CORPORATION", "AQI");
    typesHash.put("MCDONALD'S LICENSEE", "BJ7");
    typesHash.put("MCDONALD'S OPERATING CORPORATE CREW", "BNP");
    typesHash.put("MCGLADREY, LLP", "BXP");
    typesHash.put("MCGRAW HILL EDUCATION", "B16");
    typesHash.put("MCGRAW-HILL, INC.", "08W");
    typesHash.put("MCKESSON", "BBX");
    typesHash.put("MCKINSTRY CO.", "BKQ");
    typesHash.put("MDC PARTNERS", "BY2");
    typesHash.put("MEADOW GOLD DAIRIES", "0X0");
    typesHash.put("MEDIA GENERAL INC.", "B1P");
    typesHash.put("MEDICA HEALTH PLANS", "BNT");
    typesHash.put("MEDICAL CENTER OF PLANO", "0US");
    typesHash.put("MEDIMPACT", "AE4");
    typesHash.put("MEDISYS HEALTH NETWORK, INC.", "B4Q");
    typesHash.put("MEDLINE INDUSTRIES, INC.", "AMP");
    typesHash.put("MEDTRONIC, INC.", "A4I");
    typesHash.put("MEHARRY MEDICAL COLLEGE", "BZF");
    typesHash.put("MELALEUCA INC.", "BHF");
    typesHash.put("MELROSE CREDIT UNION", "B1R");
    typesHash.put("MEMBER INSURANCE", "0C5");
    typesHash.put("MEMBERS", "01E");
    typesHash.put("MEMORIAL HERMANN BAPTIST BEAUMONT", "AF3");
    typesHash.put("MEMORIAL HERMANN BAPTIST ORANGE HOS", "AF7");
    typesHash.put("MEMORIAL HERMANN HEALTHCARE", "017");
    typesHash.put("MERCEDES BENZ US INTERNATIONAL", "A06");
    typesHash.put("MERCEDES-BENZ USA, LLC", "A7A");
    typesHash.put("MERCHANTS BANK", "04X");
    typesHash.put("MERCK & CO., INC.", "A6E");
    typesHash.put("MERCURY SYSTEMS", "A7Z");
    typesHash.put("MERCY COLLEGE", "0AH");
    typesHash.put("MERCY HEALTH", "AEI");
    typesHash.put("MERCY MEDICAL CENTER, CEDAR RAPIDS", "BFG");
    typesHash.put("MERCY MEMORIAL HOSPITAL SYSTEM", "BNO");
    typesHash.put("MERCYHURST UNIVERSITY ALUMNI", "BUY");
    typesHash.put("MERIAL", "A9D");
    typesHash.put("MERIDIAN HEALTH SYSTEM", "0TX");
    typesHash.put("MERIT RESOURCES INC.", "B0X");
    typesHash.put("MERVYNS", "017");
    typesHash.put("MESA AIR GROUP", "0W7");
    typesHash.put("MESQUITE INDEPENDENT SCHOOL DISTRIC", "B46");
    typesHash.put("MET MORTGAGE", "03O");
    typesHash.put("METHODIST LE BONHEUR HEALTHCARE", "BZ4");
    typesHash.put("METLIFE CAPITAL CORPORATION", "04P");
    typesHash.put("METRO ONE TELECOMMUNICATIONS", "017");
    typesHash.put("METROPOLITAN GOLF ASSOCIATION", "BW2");
    typesHash.put("METROPOLITAN NASHVILLE AIRPORT AUTH", "ATD");
    typesHash.put("METROPOLITAN TRANSIT AUTH", "BEK");
    typesHash.put("METLIFE", "010");
    typesHash.put("MFS", "017");
    typesHash.put("MGM RESORTS INTERNATIONAL", "A5U");
    typesHash.put("MHMR OF TARRANT COUNTY", "B4S");
    typesHash.put("M-I LLC", "BEG");
    typesHash.put("MICHAEL FOODS, INC.", "B1C");
    typesHash.put("MICHIGAN STATE UNIVERSITY", "B0T");
    typesHash.put("MICRO ELECTRONICS INC", "A5A");
    typesHash.put("MICROCHIP TECHNOLOGY", "AU2");
    typesHash.put("MICRON TECHNOLOGY, INC.", "A2B");
    typesHash.put("MICROSOFT", "06R");
    typesHash.put("MICROSOFT ALUMNI NETWORK", "AUO");
    typesHash.put("MIDDLESEX COUNTY COLLEGE", "AA6");
    typesHash.put("MILLENNIUM LABORATORIES", "B32");
    typesHash.put("MILLERCOORS", "AVG");
    typesHash.put("MINACS GROUP", "APD");
    typesHash.put("MINERALS TECHNOLOGIES INC.", "AY5");
    typesHash.put("MINISTRY EAST REGION", "BWN");
    typesHash.put("MINISTRY HEALTH CARE, INC", "BR3");
    typesHash.put("MINNESOTA BENEFIT ASSOCIATION", "09F");
    typesHash.put("MINNESOTA MEDICAL ASSOCIATION", "A4B");
    typesHash.put("MIT", "BIR");
    typesHash.put("MITCHELL DISTRIBUTING", "AQH");
    typesHash.put("MITRE CORPORATION", "017");
    typesHash.put("MITSUBISHI POLYESTER FILM", "0O9");
    typesHash.put("MIZUHO CORPORATE BANK", "BEZ");
    typesHash.put("MIZUNO USA INC", "0UM");
    typesHash.put("MMODAL", "BDE");
    typesHash.put("MODERN BUSINESS ASSOC.", "BWJ");
    typesHash.put("MOEN INCORPORATED", "0C0");
    typesHash.put("MOHAWK INDUSTRIES", "AZG");
    typesHash.put("MOLEX INC.", "BES");
    typesHash.put("MOMENTIVE", "BY1");
    typesHash.put("MONDELEZ INTERNATIONAL, LLC", "017");
    typesHash.put("MONEYGRAM INTERNATIONAL, INC.", "0CI");
    typesHash.put("MONITRONICS INTERNATIONAL, INC.", "BX4");
    typesHash.put("MONROE SCHOOL BOARD OF EDUCATION", "BUD");
    typesHash.put("MONSANTO COMPANY", "AK2");
    typesHash.put("MONTEFIORE MEDICAL CENTER", "08R");
    typesHash.put("MOODY'S CORPORATION", "AB2");
    typesHash.put("MOOSE INTERNATIONAL INC", "BXZ");
    typesHash.put("MORGAN STANLEY", "AVS");
    typesHash.put("MOTOROLA ISG", "031");
    typesHash.put("MOTOROLA MOBILITY", "BSJ");
    typesHash.put("MOUNT AUBURN", "ALE");
    typesHash.put("MOUNTAIN AMERICA CREDIT UNION", "BZK");
    typesHash.put("MOVADO GROUP", "0N2");
    typesHash.put("MOVIUS INTERACTIVE CORPORATION", "AT6");
    typesHash.put("MRV COMMUNICATIONS, INC", "09V");
    typesHash.put("MT. BAKER SCHOOL DISTRICT", "AQR");
    typesHash.put("MULTILINK", "AJA");
    typesHash.put("MUNGER, TOLLES & OLSON", "BLQ");
    typesHash.put("MUNICH RE AMERICA", "0RL");
    typesHash.put("MUSCULOSKELETAL TRANSPLANT FNDTN", "BFA");
    typesHash.put("MUSEUM OF MODERN ART", "AVZ");
    typesHash.put("MV TRANSPORTATION", "BHV");
    typesHash.put("MVP HEALTH PLAN", "0RU");
    typesHash.put("MYR GROUP", "A2A");
    typesHash.put("MYRIAD GENETICS, INC.", "0IQ");
    typesHash.put("N & M TRANSFER COMPANY, INC.", "0AO");
    typesHash.put("N&M TRANSFER COMPANY, INC.", "0AO");
    typesHash.put("N F A, INC.", "BHN");
    typesHash.put("NFA, INC.", "BHN");
    typesHash.put("NAACP", "BTD");
    typesHash.put("NACCO MATERIALS HANDLING GROUP, INC", "BDT");
    typesHash.put("NALCO", "BIY");
    typesHash.put("NAMMO TALLEY, INC.", "AE7");
    typesHash.put("NASA", "BCA");
    typesHash.put("NATIONAL AMUSEMENTS INC.", "B6I");
    typesHash.put("NATIONAL AQUARIUM", "AS0");
    typesHash.put("NATIONAL ASSOCIATION OF CONSERVATIV", "B30");
    typesHash.put("NATIONAL ASSOCIATION OF POSTAL SUPV", "0GJ");
    typesHash.put("NATIONAL COALITION OF PUBLIC SAFETY", "BPL");
    typesHash.put("NATIONAL COOPERATIVE BANK", "ANS");
    typesHash.put("NATIONAL CORVETTE OWNERS ASSOCIATIO", "BIN");
    typesHash.put("NATIONAL ELECTRONICS WARRANTY LLC", "A3F");
    typesHash.put("NATIONAL ENVELOPE CORPORATION", "BYP");
    typesHash.put("NATIONAL EXCHANGE CLUB", "B48");
    typesHash.put("NATIONAL GEOGRAPHIC SOCIETY", "A1M");
    typesHash.put("NATIONAL GRID", "AQV");
    typesHash.put("NATIONAL HEALTH MANAGEMENT", "AKG");
    typesHash.put("NATIONAL HIGH SCHOOL COACHES ASSOCI", "B0S");
    typesHash.put("NATIONAL LOUIS UNIVERSITY", "AOA");
    typesHash.put("NATIONAL MULTIPLE SCLEROSIS SOCIETY", "BF8");
    typesHash.put("NATIONAL OILWELL VARCO", "BUM");
    typesHash.put("NATIONAL PEO, LLC.", "BYQ");
    typesHash.put("NATIONAL PTA", "BMG");
    typesHash.put("NATIONAL RIFLE ASSOC OF AMERICA", "BR7");
    typesHash.put("NATIONAL TELECOMMUNICATIONS COOPERA", "BVA");
    typesHash.put("NATIONWIDE VISION CENTER, PC", "BRU");
    typesHash.put("NATL MULTIPLE SCLEROSIS SOC", "BQO");
    typesHash.put("NATL TRUST FOR HISTORIC PRESERVATIO", "0VZ");
    typesHash.put("NATL. ASSOC. FOR THE SELF EMPLOYED", "BIV");
    typesHash.put("NATURE'S WAY PRODUCTS, INC.", "AWG");
    typesHash.put("NAVARRO DISCOUNT PHARMACIES", "B1B");
    typesHash.put("NAVIGANT CONSULTING", "ASD");
    typesHash.put("NAVISTAR INTERNATIONAL CORP.", "BNC");
    typesHash.put("NAVTEQ", "BA4");
    typesHash.put("NAVY FEDERAL CREDIT UNION", "B49");
    typesHash.put("NBC UNIVERSAL", "017");
    typesHash.put("NCR", "067");
    typesHash.put("NEC DISPLAY SOLUTIONS OF AMERICA", "0ZM");
    typesHash.put("NEC SOLUTIONS AMERICA INC", "A0A");
    typesHash.put("NEC TECHNOLOGIES", "0J5");
    typesHash.put("NEGWER MATERIALS", "AD2");
    typesHash.put("NEMAK USA, INC", "AU6");
    typesHash.put("NESTLE USA INC.", "ARH");
    typesHash.put("NETAPP, INC", "BVI");
    typesHash.put("NETCENTRICS CORPORATION", "B5L");
    typesHash.put("NETJETS, INC.", "AR6");
    typesHash.put("NETWORK COMMUNICATIONS, INC.", "AIA");
    typesHash.put("NEUBERGER BERMAN GROUP LLC", "BOJ");
    typesHash.put("NEVADA HOTEL AND LODGING ASSOCIATIO", "BZS");
    typesHash.put("NEW ALBERTSON'S", "017");
    typesHash.put("NEW BALANCE", "BCD");
    typesHash.put("NEW ENGLAND FEDERAL CREDIT UNION", "307");
    typesHash.put("NEW FLYER OF AMERICA, INC.", "BY6");
    typesHash.put("NEW FREEDOM MORTGAGE CORPORATION", "AWU");
    typesHash.put("NEW HORIZON ACADEMY", "BNI");
    typesHash.put("NEW JERSEY MAP", "ARK");
    typesHash.put("NEW MEXICO FEDERATION OF TEACHERS", "0FI");
    typesHash.put("NEW MEXICO HIGHLANDS UNIVERSITY", "0NE");
    typesHash.put("NEW YORK METHODIST HOSPITAL", "0ON");
    typesHash.put("NEW YORK STATE UNITED TEACHERS", "005");
    typesHash.put("NEW YORK TIMES", "BK6");
    typesHash.put("NEW YORK UNIVERSITY", "017");
    typesHash.put("NEWBERG PUBLIC SCHOOLS", "BO0");
    typesHash.put("NEWELL COMPANY", "04E");
    typesHash.put("NEWMARKET INTERNATIONAL", "ADK");
    typesHash.put("NEWPAGE CORPORATION", "BNH");
    typesHash.put("NEWPORT HOSPITAL", "0JY");
    typesHash.put("NEWPORT MESA UNIFIED SCHOOL DIST.", "BEQ");
    typesHash.put("NEWS CORPORATION", "017");
    typesHash.put("NEXEO SOLUTIONS, LLC", "BTM");
    typesHash.put("NEXTERA ENERGY, INC.", "AS4");
    typesHash.put("NICE SYSTEMS, INC.", "AEJ");
    typesHash.put("NICHOLAS H. NOYES MEMORIAL HOSPITAL", "0MW");
    typesHash.put("NIKE, INC.", "0EO");
    typesHash.put("NIKON, INC.", "AM8");
    typesHash.put("NIPPON EXPRESS USA", "A1E");
    typesHash.put("NISSAN NORTH AMERICA, INC.", "AXR");
    typesHash.put("NIVIDIA", "BSA");
    typesHash.put("NOKIA", "AXW");
    typesHash.put("NORDSTROM INC", "0TV");
    typesHash.put("NORTH CAROLINA STATE FIREMANS ASSOC", "BZU");
    typesHash.put("NORTH JERSEY FEDERAL CREDIT UNION", "B1Q");
    typesHash.put("NORTHEAST BEHAVIORAL HEALTH", "AJM");
    typesHash.put("NORTHEAST CENTER FOR SPECIAL CARE", "BCB");
    typesHash.put("NORTHEAST COMMUNITY CREDIT UNION", "B4T");
    typesHash.put("NORTHEAST REHABILITATION HOSPITAL", "0ES");
    typesHash.put("NORTHEAST UTILITIES", "07K");
    typesHash.put("NORTHEASTERN UNIVERSITY", "05F");
    typesHash.put("NORTHERN TIER ENERGY", "B1L");
    typesHash.put("NORTHERN VIRGINIA FAMILY SERVICE", "A2T");
    typesHash.put("NORTHROP GRUMMAN", "BMB");
    typesHash.put("NORTHWEST COMMUNITY HOSPITAL", "0MB");
    typesHash.put("NORTHWEST TRAILER PARTS", "0WH");
    typesHash.put("NORTON HEALTHCARE", "A4U");
    typesHash.put("NOVANT HEALTH", "0FJ");
    typesHash.put("NOVARTIS CORPORATION", "AM2");
    typesHash.put("NOVELL, INC.", "AUQ");
    typesHash.put("NOVO NORDISK INC.", "0MS");
    typesHash.put("NSTAR", "03W");
    typesHash.put("NTN USA CORPORATION", "BQG");
    typesHash.put("NTT DATA INC.", "017");
    typesHash.put("NTT DATA, INC.", "0O7");
    typesHash.put("NU SKIN", "0GV");
    typesHash.put("NU-KOTE INTERNATIONAL", "0ZL");
    typesHash.put("NURSES FOUNDATION OF WISCONSIN", "BDO");
    typesHash.put("NUTMEG STATE FEDERAL CREDIT UNION", "A8D");
    typesHash.put("NV ENERGY", "BOY");
    typesHash.put("NW FINANCIAL ASSOC.EE BENEFIT TRUST", "BO1");
    typesHash.put("NY CONVENTION CENTER OPERATING CORP", "BOZ");
    typesHash.put("NYE COUNTY", "B0U");
    typesHash.put("NYK LINE INC.", "0UK");
    typesHash.put("NYPRO", "BOG");
    typesHash.put("NYSARC, INC.", "AVT");
    typesHash.put("NYSCOPBA", "BCH");
    typesHash.put("NYSE EURONEXT", "AS5");
    typesHash.put("O.C. TANNER COMPANY", "AJU");
    typesHash.put("OC TANNER COMPANY", "AJU");
    typesHash.put("OCCIDENTAL PETROLEUM CORPORATION", "BPC");
    typesHash.put("OCEAN SPRAY CRANBERRIES", "AZI");
    typesHash.put("OFFICE DEPOT", "BBT");
    typesHash.put("OFFICE MAX INC.", "017");
    typesHash.put("OFS FITEL, LLC", "B1X");
    typesHash.put("OGILVY & MATHER", "02Q");
    typesHash.put("OHIO DENTAL ASSOCIATION", "A5L");
    typesHash.put("OHIO OSTEOPATHIC ASSOCIATION", "A0M");
    typesHash.put("OHIOHEALTH", "A6G");
    typesHash.put("OKLAHOMA HEART HOSPITAL", "BFM");
    typesHash.put("OKLAHOMA PUBLIC EMPLOYEES ASSOC.", "B12");
    typesHash.put("OLD MUTUAL (US) HOLDINGS INC", "BJM");
    typesHash.put("OLDCASTLE INC.", "BB8");
    typesHash.put("OLIN CORPORATION", "017");
    typesHash.put("OLMSTED FALLS BOARD OF EDUCATION", "0X7");
    typesHash.put("O'MELVENY & MYERS LLP", "BN9");
    typesHash.put("OMELVENY & MYERS LLP", "BN9");
    typesHash.put("OMNI CIRCUITS, INC.", "0Y9");
    typesHash.put("ON SEMICONDUCTOR CORPORATION", "AT1");
    typesHash.put("O'NEAL STEEL INC", "A4S");
    typesHash.put("ONEAL STEEL INC", "A4S");
    typesHash.put("ONEAMERICA", "A9A");
    typesHash.put("ONYX SOFTWARE", "0UJ");
    typesHash.put("OPEIU LOCAL 100", "BZ1");
    typesHash.put("OPTUM, INC.", "0ZH");
    typesHash.put("ORANGE BUSINESS SERVICES HOLDINGS", "0VK");
    typesHash.put("ORANGE COAST TITLE COMPANY", "BDR");
    typesHash.put("ORANGE COUNTY'S CREDIT UNION", "BS7");
    typesHash.put("ORANGE REGIONAL MEDICAL CENTER", "0JS");
    typesHash.put("ORCHARD SUPPLY HARDWARE COPRORATION", "BXJ");
    typesHash.put("ORDER SONS OF ITALY IN AMERICA", "BRX");
    typesHash.put("OREGON GOLF ASSOCIATION", "BS4");
    typesHash.put("ORTHOLINK PHYSICIANS CORPORATION", "0XQ");
    typesHash.put("OSF SAINT ELIZABETH MEDICAL CENTER", "AYL");
    typesHash.put("OSMA", "BHS");
    typesHash.put("OSRAM SYLVANIA", "AQU");
    typesHash.put("OTTO BOCK HEALTHCARE, LP", "A3J");
    typesHash.put("OUR LADY OF CONSOLATION", "0XE");
    typesHash.put("OUR365", "08O");
    typesHash.put("OVERHEAD DOOR CORPORATION", "03C");
    typesHash.put("OVERLAKE HOSPITAL", "0NY");
    typesHash.put("OWENS & MINOR", "BVP");
    typesHash.put("OWENS CORNING", "017");
    typesHash.put("OZBURN-HESSEY LOGISTICS", "ANM");
    typesHash.put("OZINGA BROS., INC.", "BDG");
    typesHash.put("P.F. CHANG'S CHINA BISTRO, INC.", "BXX");
    typesHash.put("PF CHANG'S CHINA BISTRO, INC.", "BXX");
    typesHash.put("PA CONSULTING GROUP", "A1W");
    typesHash.put("PACE", "AR3");
    typesHash.put("PACE RESOURCES, INC.", "AJV");
    typesHash.put("PACIFIC ARCHITECTS AND ENGINEERS", "B18");
    typesHash.put("PACIFIC DENTAL SERVICES, INC", "A70");
    typesHash.put("PACIFICORP", "0DJ");
    typesHash.put("PALM ONE", "0Y8");
    typesHash.put("PALMDALE SCHOOL DISTRICT", "AXK");
    typesHash.put("PALOMAR HEALTH", "BMC");
    typesHash.put("PANASONIC CORP OF NORTH AMERICA", "0TN");
    typesHash.put("PAREXEL INTERNATIONAL CORPORATION", "0ED");
    typesHash.put("PARK NICOLLET", "ASK");
    typesHash.put("PARKHILL SCHOOL DISTRICT", "0JL");
    typesHash.put("PARKVIEW HEALTH", "AJ0");
    typesHash.put("PARLEX USA, INC.", "AGL");
    typesHash.put("PARSONS CORPORATION", "AZB");
    typesHash.put("PARTMINER, INC", "AJE");
    typesHash.put("PATHFINDER INC", "BY7");
    typesHash.put("PATHOLOGY ASSOCIATES MEDICAL LABORA", "BPF");
    typesHash.put("PAUL HASTINGS LLP", "BE4");
    typesHash.put("PAWLING CORPORATION", "0NF");
    typesHash.put("PAYCHEX, INC.", "AVC");
    typesHash.put("PBC", "A1L");
    typesHash.put("PBF HOLDING COMPANY LLC", "B2D");
    typesHash.put("PC CONNECTION, INC.", "AM5");
    typesHash.put("PC MALL", "A9M");
    typesHash.put("PECHANGA DEVELOPMENT CORPORATION", "BQY");
    typesHash.put("PECHINEY", "05E");
    typesHash.put("PEGASUS SOLUTIONS", "ATG");
    typesHash.put("PEIRCE-PHELPS", "AN2");
    typesHash.put("PENINSULA HOSPITAL CENTER", "0MZ");
    typesHash.put("PENNSYLVANIA PROFESSIONAL FIREFIGHT", "BZ5");
    typesHash.put("PEOPLES ENERGY CORPORATION", "0GR");
    typesHash.put("PEORIA UNIFIED SCHOOL DISTRICT", "AX0");
    typesHash.put("PEP BOYS MANNY MOE & JACK", "BTI");
    typesHash.put("PEPCO HOLDINGS INC.", "BI7");
    typesHash.put("PEPSICO", "ACA");
    typesHash.put("PERKINELMER", "0YO");
    typesHash.put("PERNOD RICARD", "BRV");
    typesHash.put("PETCO ANIMAL SUPPLIES, INC.", "BHA");
    typesHash.put("PETSMART", "BHR");
    typesHash.put("PFIZER", "0DF");
    typesHash.put("PHELPS COUNTY REGIONAL MEDICAL CENT", "A5E");
    typesHash.put("PHH CORP", "A57");
    typesHash.put("PHILADELPHIA INSURANCE COMPANIES", "BD4");
    typesHash.put("PHILIP MORRIS", "017");
    typesHash.put("PHILIPS ELECTRONICS", "0P2");
    typesHash.put("PHILLIPS EXETER ACADEMY", "A2V");
    typesHash.put("PHOENIX CHILDREN'S ACADEMY", "B2H");
    typesHash.put("PIKEVILLE COLLEGE", "A81");
    typesHash.put("PINELLAS COUNTY SCHOOLS", "AVY");
    typesHash.put("PINNACLE AIRLINES INC.", "AOZ");
    typesHash.put("PINNACLE FOODS GROUP, LLC", "BM7");
    typesHash.put("PINNACLE WEST CAPITAL CORPORATION", "0CO");
    typesHash.put("PIONEER VALLEY HOSPITAL", "AD3");
    typesHash.put("PITNEY BOWES, INC.", "03E");
    typesHash.put("PITT COMMUNITY COLLEGE", "0Q5");
    typesHash.put("PITT COMMUNITY COLLEGE ALUMNI ASSOC", "BX8");
    typesHash.put("PLATINUM EQUITY HOLDINGS", "AMW");
    typesHash.put("PLEXUS", "0PG");
    typesHash.put("PMC GROUP, INC.", "0Q8");
    typesHash.put("PMSI", "BI9");
    typesHash.put("PNC", "0XK");
    typesHash.put("POET LLC", "B2L");
    typesHash.put("POLYCOM, INC.", "06K");
    typesHash.put("PORTER NOVELLI", "AYN");
    typesHash.put("PORTLAND COMMUNITY COLLEGE", "0M0");
    typesHash.put("PORTLAND GENERAL ELECTRIC", "BH5");
    typesHash.put("PORTS AMERICA", "BW0");
    typesHash.put("POWELL INDUSTRIES", "BWK");
    typesHash.put("PPG INDUSTRIES, INC.", "BNM");
    typesHash.put("PQ CORPORATION", "ATB");
    typesHash.put("PR NEWSWIRE", "APX");
    typesHash.put("PRAXAIR INC", "AOX");
    typesHash.put("PRECIOUS PLATES", "B3W");
    typesHash.put("PRECISION ENGINEERED PRODUCTS", "AT5");
    typesHash.put("PREMIER HOME HEALTH CARE", "BUV");
    typesHash.put("PREMIER MEMBERS FEDERAL CREDIT UNIO", "118");
    typesHash.put("PREMIER RESEARCH", "BKX");
    typesHash.put("PRESS GANEY ASSOCIATES", "B0G");
    typesHash.put("PRESTIGE EMPLOYEE ADMINISTRATORS", "BPR");
    typesHash.put("PRICE CHOPPER", "017");
    typesHash.put("PRICEWATERHOUSECOOPERS", "0G4");
    typesHash.put("PRIDE MOBILITY PRODUCTS CORP.", "AHO");
    typesHash.put("PRIME HEALTHCARE SERVICES", "BSK");
    typesHash.put("PRIME TANNING CO., INC.", "0LT");
    typesHash.put("PRIME THERAPEUTICS", "0W0");
    typesHash.put("PRIMERICA FINANCIAL SERVICES, INC", "BRD");
    typesHash.put("PRIMESOURCE BUILDING PRODUCTS", "AVH");
    typesHash.put("PROGRESS SOFTWARE", "0JV");
    typesHash.put("PROGRESSIVE INSURANCE", "03K");
    typesHash.put("PROGRESSIVE NURSING STAFFERS", "AOW");
    typesHash.put("PROHEALTH CARE,INC", "0BF");
    typesHash.put("PRO-LIFT EQUIPMENT", "0XD");
    typesHash.put("PROTECTION ONE", "ACH");
    typesHash.put("PROVENA HEALTH", "BNW");
    typesHash.put("PROVIDENCE HEALTH & SERVICES", "BDI");
    typesHash.put("PROVIDENCE HOSPITALS", "BKN");
    typesHash.put("PSAV PRESENTATION SERVICES", "AF1");
    typesHash.put("PSE & G", "0DM");
    typesHash.put("PSEA", "0R8");
    typesHash.put("PSS WORLD, INC.", "AUJ");
    typesHash.put("PTC", "021");
    typesHash.put("PUBLIC EMPLOYEES FEDERATION", "BR6");
    typesHash.put("PUBLIC STORAGE", "BN1");
    typesHash.put("PUBLICIS GROUPE", "017");
    typesHash.put("PUBLISHERS CLEARING HOUSE", "0LA");
    typesHash.put("PULASKI COUNTY SPECIAL SCHOOL DIST", "B33");
    typesHash.put("PUMA NORTH AMERICA", "AIK");
    typesHash.put("PURDUE UNIVERSITY", "BRH");
    typesHash.put("PUTNAM INVESTMENTS", "017");
    typesHash.put("PVH CORP.", "0M4");
    typesHash.put("QEP RESOURCES, INC.", "BUN");
    typesHash.put("QIAGEN SCIENCES, INC.", "AUK");
    typesHash.put("QUAD GRAPHICS", "0EA");
    typesHash.put("QUALITY SYSTEMS, INC", "BKP");
    typesHash.put("QUANTUM CORPORATION", "06I");
    typesHash.put("QUEST DIAGNOSTICS", "ASG");
    typesHash.put("QUESTAR CORPORATION", "02S");
    typesHash.put("QUESTCO, INC.", "BWG");
    typesHash.put("QUICKEN LOANS", "BWI");
    typesHash.put("QUICKWAY CARRIERS", "AEE");
    typesHash.put("QUINTILES TRANSNATIONAL CORPORATION", "AQ1");
    typesHash.put("R.I.T", "017");
    typesHash.put("RIT", "017");
    typesHash.put("RABOBANK INTERNATIONAL", "ANZ");
    typesHash.put("RADISYS CORPORATION", "0Y4");
    typesHash.put("RANCHO SANTIAGO COMMUNITY COLLEGE", "AXQ");
    typesHash.put("RANDOLPH COUNTY BOARD OF EDUCATION", "AWH");
    typesHash.put("RANDSTAD PROFESSIONALS US, LP", "A4K");
    typesHash.put("RARITAN BAY MEDICAL CENTER", "BQE");
    typesHash.put("RAYTHEON", "03F");
    typesHash.put("RBC USA HOLDCO CORPORATION", "0S2");
    typesHash.put("RBS CITIZENS, NA", "AA2");
    typesHash.put("RCM TECHNOLOGIES", "AYO");
    typesHash.put("RCN CORPORATION", "BFR");
    typesHash.put("REA MAGNET WIRE COMPANY INC.", "0H1");
    typesHash.put("REA MAGNET WIRE COMPANY INC.", "0H1");
    typesHash.put("READER'S DIGEST", "05Z");
    typesHash.put("REAL ESTATE ADVISOR DEFENSE, INC.", "BQS");
    typesHash.put("RECALL-AMERICAS", "A0Q");
    typesHash.put("RECEIVABLE MANAGEMENT SERVICES CORP", "AMD");
    typesHash.put("RECKITT BENCKISER", "0LN");
    typesHash.put("RECORDING FOR THE BLIND & DYSLEXIC", "0U8");
    typesHash.put("RED BULL NORTH AMERICA, INC.", "AWW");
    typesHash.put("RED HAT, INC.", "A79");
    typesHash.put("REDBACK NETWORKS", "AY8");
    typesHash.put("REDDY ICE", "BW3");
    typesHash.put("REED ELSEVIER", "A7T");
    typesHash.put("REEDY CREEK IMPROVEMENT DISTRICT", "AG3");
    typesHash.put("REGENERON PHARMACEUTICALS", "0QP");
    typesHash.put("REGIONAL MANAGEMENT CORP", "B45");
    typesHash.put("REICHHOLD", "0PF");
    typesHash.put("RELIANT MEDICAL GROUP", "BO5");
    typesHash.put("REMEC DEFENSE AND SPACE, INC.", "A39");
    typesHash.put("REMINGTON ARMS COMPANY", "0V7");
    typesHash.put("RENAISSANCE", "0PR");
    typesHash.put("REPLACEMENTS, LTC", "A26");
    typesHash.put("RES-CARE", "017");
    typesHash.put("RESEARCH FOUNDATION FOR MENTAL HYG", "A9R");
    typesHash.put("RESOURCES FOR HUMAN DEVELOPMENT", "B09");
    typesHash.put("RESOURCES GLOBAL PROFESSIONALS", "BQ8");
    typesHash.put("RESTORATION HARDWARE", "BIZ");
    typesHash.put("RESURGENS ORTHOPAEDICS", "BGO");
    typesHash.put("RETIRED & DISABLED POLICE OF AMERIC", "BPZ");
    typesHash.put("RETIRED INDIANA PUBLIC EMPLOYEES", "A9N");
    typesHash.put("RETIRED PUBLIC EMPLOYEES OF NEVADA", "BVF");
    typesHash.put("REXEL HOLDINGS USA", "BSF");
    typesHash.put("REYES HOLDINGS L.L.C.", "BEY");
    typesHash.put("REYNOLDS & REYNOLDS", "06H");
    typesHash.put("REYNOLDS AMERICAN INC", "A8J");
    typesHash.put("RHF INVESTMENTS", "B55");
    typesHash.put("RHODE ISLAND ASSOC OF SCHOOL PRINCI", "AX2");
    typesHash.put("RHODE ISLAND COUNCIL 94 AFSCME", "B5R");
    typesHash.put("RIA GROUP", "0JF");
    typesHash.put("RICH PRODUCTS CORPORATION", "ACZ");
    typesHash.put("RICHFIELD HOSPITALITY,INC", "ARU");
    typesHash.put("RICOH CORPORATION", "AVL");
    typesHash.put("RIDGEWOOD BOARD OF EDUCATION", "0M5");
    typesHash.put("RIDGEWOOD SAVINGS BANK", "A6W");
    typesHash.put("RITE AID", "BDJ");
    typesHash.put("RIVERVIEW SCHOOL DISTRICT", "ACU");
    typesHash.put("RJF INTERNATIONAL CORPORATION", "B1A");
    typesHash.put("ROAD RUNNER CLUB OF AMERICA", "BGP");
    typesHash.put("ROANOKE-CHOWAN COMMUNITY COLLEGE", "0SC");
    typesHash.put("ROBBINS MANUFACTURING, INC", "B5S");
    typesHash.put("ROBERT MORRIS UNIVERSITY", "AO8");
    typesHash.put("ROCKFORD PRODUCTS CORPORATION", "0DY");
    typesHash.put("ROCKINGHAM COMMUNITY COLLEGE", "0GD");
    typesHash.put("ROCKINGHAM COUNTY SCHOOLS", "ARZ");
    typesHash.put("ROCKWELL AUTOMATION", "06W");
    typesHash.put("ROCKWELL COLLINS", "AYE");
    typesHash.put("ROCKWELL SCIENTIFIC COMPANY", "A3N");
    typesHash.put("ROCKY MOUNTAIN ORTHODONTICS", "ATZ");
    typesHash.put("ROHM & HAAS ELECTRONIC MATERIALS", "020");
    typesHash.put("ROLLINS INC.", "BLO");
    typesHash.put("ROOMS TO GO", "BL3");
    typesHash.put("ROTHMAN INSTITUTE", "B4D");
    typesHash.put("ROUNDY'S SUPERMARKETS, INC.", "02O");
    typesHash.put("ROVI CORPORATION", "BN7");
    typesHash.put("ROWAN COMPANIES INC", "BGE");
    typesHash.put("RR DONNELLEY", "0WU");
    typesHash.put("RSU #19", "A4P");
    typesHash.put("RTN FEDERAL CREDIT UNION", "0J9");
    typesHash.put("RUBY TUESDAY", "AAO");
    typesHash.put("RURAL/METRO CORPORATION", "AZ0");
    typesHash.put("RUSH COPLEY MEDICAL CENTER", "0ZS");
    typesHash.put("RUSH UNIVERSITY MEDICAL CENTER", "BJN");
    typesHash.put("RW BAIRD", "BRM");
    typesHash.put("S&S ARNOT OGDEN TERMINATED", "0LP");
    typesHash.put("S&S BANKBOSTON TERMED", "0V4");
    typesHash.put("S&S DYNAMICS RESEARCH TERM", "0G5");
    typesHash.put("S&S FLEET TERM", "0FE");
    typesHash.put("S&S HITCHNER TERMINATED", "0MC");
    typesHash.put("S&S ROADWAY TERMED", "0XU");
    typesHash.put("S. ABRAHAM & SONS", "ABX");
    typesHash.put("S ABRAHAM & SONS", "ABX");
    typesHash.put("SABINE STATE BANK & TRUST CO.", "B54");
    typesHash.put("SAFETY KLEEN", "BD2");
    typesHash.put("SAFEWAY, INC", "BHY");
    typesHash.put("SAGE", "A3R");
    typesHash.put("SAGER ELECTRONICS", "AFZ");
    typesHash.put("SAINT CLARES HEALTH SYSTEM", "BOK");
    typesHash.put("SAKS FIFTH AVENUE", "B3X");
    typesHash.put("SALINE MEMORIAL HOSPITAL", "AGQ");
    typesHash.put("SALT LAKE CITY", "0CH");
    typesHash.put("SALT LAKE COMMUNITY COLLEGE ALUMNI", "BZD");
    typesHash.put("SALT LAKE COUNTY", "A2O");
    typesHash.put("SALT LAKE REGIONAL", "0O8");
    typesHash.put("SALT RIVER PROJECT", "0BB");
    typesHash.put("SAMARITAN HEALTHCARE", "0N0");
    typesHash.put("SAMARITAN MEDICAL CENTER", "0OD");
    typesHash.put("SAMSUNG AUSTIN SEMICONDUCTOR", "BF9");
    typesHash.put("SAMSUNG INFORMATION SYSTEMS AMERICA", "BXA");
    typesHash.put("SAMSUNG TELECOMMUNICATIONS", "BDX");
    typesHash.put("SAMTEC", "AUD");
    typesHash.put("SAN ANTONIO FEDERAL CREDIT UNION", "BVT");
    typesHash.put("SAN ANTONIO INDEPENDENT SCHOOL", "BM9");
    typesHash.put("SAN DIEGO STATE UNIV. RESEARCH", "A1U");
    typesHash.put("SAN LEANDRO UNIFIED SCHOOL DISTRICT", "B0Y");
    typesHash.put("SANOFI", "AEN");
    typesHash.put("SANTANDER HOLDINGS USA, INC", "0XV");
    typesHash.put("SANYO NORTH AMERICA CORPORATION", "AJ9");
    typesHash.put("SAP AMERICA", "017");
    typesHash.put("SAPERS COM ENERGY TERMINATED", "0MD");
    typesHash.put("SAPERS STAPLES TERMINATED", "0PQ");
    typesHash.put("SAPIENT", "ALS");
    typesHash.put("SARAH BUSH", "0M7");
    typesHash.put("SARAH LAWRENCE COLLEGE", "0CZ");
    typesHash.put("SAS INSTITUTE", "AZ7");
    typesHash.put("SASAKI ASSOCIATES, INC.", "0IE");
    typesHash.put("SCANSOFT", "AKW");
    typesHash.put("SCF ARIZONA", "BD0");
    typesHash.put("SCHINDLER ELEVATOR CORPORATION", "AY7");
    typesHash.put("SCHLUMBERGER", "BV1");
    typesHash.put("SCHNEIDER NATIONAL", "03R");
    typesHash.put("SCHOLASTIC, INC", "AEO");
    typesHash.put("SCHOOL DIST KETTLE MORAINE-RETIREES", "0NV");
    typesHash.put("SCHOOL SPECIALTY, INC.", "ALN");
    typesHash.put("SCHWAN'S SHARED SERVICES, LLC", "BUG");
    typesHash.put("SCI COMPANIES", "A9J");
    typesHash.put("SCITOR CORPORATION", "AZM");
    typesHash.put("SCOTTISH RITE SOUTHERN JURISDICTION", "BMS");
    typesHash.put("SCOTT-MCRAE AUTOMOTIVE", "B0P");
    typesHash.put("SCOTTSDALE UNIFIED SCHOOL DISTRICT", "B0Z");
    typesHash.put("SEA RAY BOATS", "017");
    typesHash.put("SEABURY & SMITH * EMPLOYEES", "017");
    typesHash.put("SEACHANGE INTERNATIONAL", "0OW");
    typesHash.put("SEAGATE US, LLC", "BOQ");
    typesHash.put("SEARLES VALLEY MINERALS", "BOI");
    typesHash.put("SEARS HOLDINGS CORPORATION", "017");
    typesHash.put("SEBA", "BO9");
    typesHash.put("SECOND AMENDMENT FOUNDATION INC.", "BRL");
    typesHash.put("SEDGWICK CMS", "BTT");
    typesHash.put("SEI INVESTMENTS", "APQ");
    typesHash.put("SEIKO CORPORATION OF AMERICA", "017");
    typesHash.put("SELECT PORTFOLIO SERVICING", "A94");
    typesHash.put("SENECA FOODS CORP", "0CE");
    typesHash.put("SENSIENT TECHNOLOGIES", "04U");
    typesHash.put("SEPRACOR INC.", "0UR");
    typesHash.put("SERCO", "BLX");
    typesHash.put("SERENA SOFTWARE", "ADU");
    typesHash.put("SERIGRAPH, INC.", "0J0");
    typesHash.put("SETON HEALTHCARE NETWORK", "ABK");
    typesHash.put("SEVEN WORLDWIDE INC.", "0GY");
    typesHash.put("SEVERN TRENT SERVICES", "AW9");
    typesHash.put("SFM MUTUAL INSURANCE COMPANY", "AEM");
    typesHash.put("SGS NORTH AMERICA", "BNQ");
    typesHash.put("SHAMROCK FOODS, INC", "A0J");
    typesHash.put("SHANNON CLINIC", "AET");
    typesHash.put("SHANNON MEDICAL CENTER", "AAS");
    typesHash.put("SHARP", "0LE");
    typesHash.put("SHARP HEALTHCARE", "BIW");
    typesHash.put("SHEET METAL WORKERS LOCAL UNION 38", "BZ7");
    typesHash.put("SHELL OIL", "0FX");
    typesHash.put("SHISEIDO COSMETICS AMERICA LTD", "BTP");
    typesHash.put("SIEMENS CORPORATION", "AVK");
    typesHash.put("SIGNATURE PAYROLL SERVICES, LLC.", "BB5");
    typesHash.put("SILGAN PLASTICS CORPORATION", "0IK");
    typesHash.put("SIMMONS FOOD", "AJK");
    typesHash.put("SIMPLY FASHION STORES", "A91");
    typesHash.put("SINAI HOSPITAL OF BALTIMORE", "017");
    typesHash.put("SIPEX CORPORATION", "AHQ");
    typesHash.put("SIRVA INC", "BIO");
    typesHash.put("SITA", "0T0");
    typesHash.put("SIX FLAGS ENTERTAINMENT CORPORATION", "B06");
    typesHash.put("SKILLS OF CENTRAL PA", "0II");
    typesHash.put("SKYONE FEDERAL CREDIT UNION", "BYV");
    typesHash.put("SLM CORPORATION", "0UL");
    typesHash.put("SMARTHEALTH AND AFFILIATES", "AS2");
    typesHash.put("SMILE BRANDS INC", "BJA");
    typesHash.put("SMITH INTERNATIONAL INC", "AQ4");
    typesHash.put("SMITHGROUP INC", "A3M");
    typesHash.put("SNAP-ON INC EMPLOYEES & RETIREES", "017");
    typesHash.put("SOCIETY FOR HUMAN RESOURCE MANAGEME", "BZJ");
    typesHash.put("SOFTWARE AG", "0CC");
    typesHash.put("SOLAE, LLC", "0SB");
    typesHash.put("SOLO CUP COMPANY", "BEH");
    typesHash.put("SOMERSET MEDICAL CENTER", "AAG");
    typesHash.put("SONIC AUTOMOTIVE", "A4V");
    typesHash.put("SONY COMPUTER ENTERTAINMENT AMERICA", "BQZ");
    typesHash.put("SONY ELECTRONICS INC", "AZC");
    typesHash.put("SORIN GROUP", "0SI");
    typesHash.put("SOS STAFFING", "AKQ");
    typesHash.put("SOUND CREDIT UNION", "BYU");
    typesHash.put("SOUTH CAROLINA FEDERAL CREDIT UNION", "BXD");
    typesHash.put("SOUTH COUNTY HOSPITAL INC", "BKY");
    typesHash.put("SOUTH PIEDMONT COMMUNITY COLLEGE", "0G6");
    typesHash.put("SOUTH WHIDBEY SCHOOL DISTRICT", "AWC");
    typesHash.put("SOUTHEASTERN CONTAINER, INC.", "AIE");
    typesHash.put("SOUTHERN COMPANY", "0AL");
    typesHash.put("SOUTHERN MANAGEMENT", "AZ1");
    typesHash.put("SOUTHERN NEW HAMPSHIRE HEALTH", "AU0");
    typesHash.put("SOUTHERN RESEARCH INSTITUTE", "0GF");
    typesHash.put("SOUTHERN/NORTHERN NEVADA GOLF ASSOC", "BH4");
    typesHash.put("SOUTHWEST AIRLINES", "B08");
    typesHash.put("SOUTHWEST GENERAL HEALTH CENTER", "BIQ");
    typesHash.put("SOUTHWESTERN COMMUNITYY COLLEGE", "0I8");
    typesHash.put("SOUTHWIRE COMPANY", "079");
    typesHash.put("SPACE SYSTEMS LORAL LLC", "BL4");
    typesHash.put("SPACENET, INC.", "0O1");
    typesHash.put("SPARROW HEALTH SYSTEM", "BLC");
    typesHash.put("SPARTA, INC.", "B0D");
    typesHash.put("SPARTAN LIGHT METAL PRODUCTS, INC.", "0WY");
    typesHash.put("SPAULDING REHABILITATION HOSPITAL", "0LK");
    typesHash.put("SPECIALTY CARE", "B5H");
    typesHash.put("SPECTRUM HEALTH - KENT COMMUNITY", "0ZT");
    typesHash.put("SPOKANE PUBLIC SCHOOLS 81", "A40");
    typesHash.put("SPORTS AUTHORITY", "BCL");
    typesHash.put("SPRINT", "A8U");
    typesHash.put("SPX CORPORATION", "017");
    typesHash.put("SQUIRE, SANDERS & DEMPSEY", "BQL");
    typesHash.put("SRA INTERNATIONAL", "AYM");
    typesHash.put("SSA GLOBAL TECHNOLOGIES, INC.", "AS9");
    typesHash.put("ST MICROELECTRONICS", "017");
    typesHash.put("ST. ANTHONY'S MEDICAL CENTER", "AEH");
    typesHash.put("ST. BENEDICTS FAMILY MEDICAL CENTER", "AN8");
    typesHash.put("ST. CLOUD MEDICAL GROUP", "0J3");
    typesHash.put("ST. CROIX REGIONAL MEDICAL CENTER", "AYS");
    typesHash.put("ST. FRANCIS HOSP + MED CTR OF CT", "04A");
    typesHash.put("ST. JAMES MERCY HOSPITAL", "0A2");
    typesHash.put("ST. JOHN HEALTH SYSTEM", "BMN");
    typesHash.put("ST. JOHNS UNIVERSITY - MN", "0FP");
    typesHash.put("ST. JOSEPH HC CARONDELET-KANSAS CITY", "0F1");
    typesHash.put("ST. JOSEPH HEALTH SERV OF RHODE I", "AAV");
    typesHash.put("ST. JOSEPHS/CANDLER HEALTH SYSTEM", "BTW");
    typesHash.put("ST. LUKE'S EPISCOPAL HEALTH SYS", "BVD");
    typesHash.put("ST. LUKE'S EPISCOPAL PRESB HOSPITAL", "AID");
    typesHash.put("ST. LUKE'S HEALTH SYSTEM", "AA7");
    typesHash.put("ST. LUKE'S HOSPITAL", "0BN");
    typesHash.put("ST. MARY'S HEALTH SYSTEM", "A8K");
    typesHash.put("ST. MARY'S HOSPITAL OF CT", "0H0");
    typesHash.put("ST. PETERS COLLEGE", "0NN");
    typesHash.put("ST. THOMAS AQUINAS COLLEGE", "AEY");
    typesHash.put("ST. VINCENT HOSPITALS & HEALTH SERV", "0BD");
    typesHash.put("STANADYNE CORPORATION", "AVE");
    typesHash.put("STANDARD CHARTERED BANK", "AFC");
    typesHash.put("STANDARD ELECTRIC COMPANY", "0TP");
    typesHash.put("STANDARD REGISTER", "0EI");
    typesHash.put("STANFORD HOSPITALS & CLINICS", "017");
    typesHash.put("STANLEY BLACK & DECKER", "AP8");
    typesHash.put("STANLEY STEEMER INTERNATIONAL INC.", "AT9");
    typesHash.put("STAPLES-PART TIMERS", "017");
    typesHash.put("STAR GAS PARTNERS", "AWR");
    typesHash.put("STATE BAR OF GEORGIA", "BP5");
    typesHash.put("STATE BAR OF WISCONSIN", "B0M");
    typesHash.put("STATE EMPLOYEES ASSOCIATION OF NC", "BMO");
    typesHash.put("STATE OF ALABAMA", "BPY");
    typesHash.put("STATE OF ARIZONA", "BEE");
    typesHash.put("STATE OF CONNECTICUT", "087");
    typesHash.put("STATE OF FLORIDA - DEPT OF MGMT SVC", "017");
    typesHash.put("STATE OF TEXAS", "BY3");
    typesHash.put("STATE OF UTAH", "03T");
    typesHash.put("STATE STREET BANK AND TRUST COMPANY", "017");
    typesHash.put("STATION CASINOS, INC.", "BCC");
    typesHash.put("STEFANINI TECH TEAM", "BOV");
    typesHash.put("STEMILT GROWERS, LLC", "B3Q");
    typesHash.put("STERICYCLE", "A96");
    typesHash.put("STERLING MEDICAL CENTER", "BMY");
    typesHash.put("STEVENSON UNIVERSITY", "B5W");
    typesHash.put("STEWARD HEALTH CARE SYSTEMS, LLC.", "AFU");
    typesHash.put("STICKLEY L&JG, INC.", "ATW");
    typesHash.put("STIFEL NICOLAUS & COMPANY INC", "A7K");
    typesHash.put("STORMONT-VAIL HEALTHCARE", "0NT");
    typesHash.put("STRATEGIC OUTSOURCING INC", "B1Z");
    typesHash.put("STRATUS TECHNOLOGIES, INC.", "02L");
    typesHash.put("STREAM INTERNATIONAL, INC.", "AVV");
    typesHash.put("STRUCTURE TONE INCORPORATED", "0IX");
    typesHash.put("SUBARU OF INDIANA AUTOMOTIVE, INC.", "AB0");
    typesHash.put("SUB-HUB", "A7N");
    typesHash.put("SUBURBAN PROPANE", "0VG");
    typesHash.put("SULLIVAN UNIVERSITY SYSTEM", "BG0");
    typesHash.put("SUN CHEMICAL CORPORATION", "0TH");
    typesHash.put("SUNCAST CORPORATION", "0XZ");
    typesHash.put("SUNDT CONSTRUCTION", "AJT");
    typesHash.put("SUNNEN PRODUCTS COMPANY", "0DA");
    typesHash.put("SUNRISE COLONY LP", "AWD");
    typesHash.put("SUNRISE MEDICAL INC.", "AP2");
    typesHash.put("SUNS LEGACY PARTNERS, LLC.", "A0C");
    typesHash.put("SUPERIOR ESSEX", "A6L");
    typesHash.put("SUPERIOR PRINTING INC. COMPANY", "AKB");
    typesHash.put("SUPERMEDIA LLC", "BFK");
    typesHash.put("SUPERVALU", "017");
    typesHash.put("SUPREME COUNCIL, AASR", "BC9");
    typesHash.put("SURGE RESOURCES", "BMX");
    typesHash.put("SUSAN B. ALLEN MEMORIAL HOSPITAL", "0PT");
    typesHash.put("SUSQUEHANNA BANCSHARES, INC.", "BTF");
    typesHash.put("SUSQUEHANNA INTERNATIONAL GRP", "BLA");
    typesHash.put("SUTTER HEALTH", "BDL");
    typesHash.put("SWAROVSKI NORTH AMERICA LIMITED", "BD8");
    typesHash.put("SWEDISH AMERICAN HEALTH SYSTEM", "BYO");
    typesHash.put("SWIFT TRANSPORTATION COMPANY", "0D6");
    typesHash.put("SWIRE COCA-COLA, USA", "AHA");
    typesHash.put("SYCUAN", "BKH");
    typesHash.put("SYMANTEC CORPORATION", "BHM");
    typesHash.put("SYNIVERSE TECHNOLOGIES", "AOJ");
    typesHash.put("SYNOPSYS", "BBF");
    typesHash.put("SYNTHES USA", "BRP");
    typesHash.put("SYRACUSE UNIVERSITY", "0LI");
    typesHash.put("SYSCO CORPORATION", "ADL");
    typesHash.put("SYSTEMS & ELECTRONICS, INC.", "0GE");
    typesHash.put("T. ROWE PRICE", "0JI");
    typesHash.put("T ROWE PRICE", "0JI");
    typesHash.put("TACO, INC", "AIL");
    typesHash.put("TACOMA NEWS TRIBUNE", "0LH");
    typesHash.put("TAGHLEEF INDUSTRIES", "0L2");
    typesHash.put("TALLAHASSEE MEMORIAL REG. MEDICAL", "0S4");
    typesHash.put("TANG GROUP", "0M6");
    typesHash.put("TANGOE", "BX1");
    typesHash.put("TANNER MEDICAL CENTER, INC.", "A78");
    typesHash.put("TARGET", "017");
    typesHash.put("TARGET CW", "B0W");
    typesHash.put("TASC, INC.", "BXM");
    typesHash.put("TCS AMERICA", "BWW");
    typesHash.put("TDK CORPORATION", "0L8");
    typesHash.put("TE CONNECTIVITY", "BJW");
    typesHash.put("TEACHERS CREDIT UNION", "B1D");
    typesHash.put("TEAMSTERS LOCAL 25", "BOM");
    typesHash.put("TECH DATA CORPORATION", "BUT");
    typesHash.put("TECHNICOLOR", "ACW");
    typesHash.put("TECK COMINCO AMERICAN", "A9U");
    typesHash.put("TEICHERT, INC", "A0E");
    typesHash.put("TEKNION LLC", "A7B");
    typesHash.put("TELECT INC", "A66");
    typesHash.put("TELEPHONE AND DATA SYSTEMS", "0DX");
    typesHash.put("TELEPHONE WORKERS CREDIT UNION", "04Q");
    typesHash.put("TEMPEL STEEL", "0D5");
    typesHash.put("TEMPORARY ACCOUNT", "AAI");
    typesHash.put("TEMPUR-PEDIC INTERNATIONAL", "B1G");
    typesHash.put("TENNANT COMPANY", "07D");
    typesHash.put("TENNECO AUTOMOTIVE INC.", "AWM");
    typesHash.put("TENNESSEE DENTAL ASSOCIATION", "A89");
    typesHash.put("TENNESSEE MEDICAL ASSOCIATION", "A8M");
    typesHash.put("TERADATA CORPORATION", "BED");
    typesHash.put("TERADYNE INC.", "017");
    typesHash.put("TERRACON INC.", "ALL");
    typesHash.put("TERUMO BCT, INC.", "0DT");
    typesHash.put("TESTAMERICA", "BCV");
    typesHash.put("TETRA TECH, INC.", "0BL");
    typesHash.put("TEVA PHARMACEUTICALS", "BFX");
    typesHash.put("TEXANS CREDIT UNION", "B50");
    typesHash.put("TEXAS A&M UNIVERSITY", "B5Q");
    typesHash.put("TEXAS BAY AREA CREDIT UNION", "BY9");
    typesHash.put("TEXAS HEALTH RESOURCES", "BRO");
    typesHash.put("TEXAS LIFE INSURANCE COMPANY", "A2E");
    typesHash.put("TEXAS MUTUAL INSURANCE COMPANY", "0C1");
    typesHash.put("TEXAS ROADHOUSE", "BS1");
    typesHash.put("TEXTRON INCORPORATED", "0M9");
    typesHash.put("THE ADVISORY BOARD", "AKP");
    typesHash.put("THE AMBER WATCH FOUNDATION", "BXI");
    typesHash.put("THE ASSOCIATION OF PROFESSIONALS", "BTO");
    typesHash.put("THE BESSEMER GROUP, INC", "BVB");
    typesHash.put("THE BON TON DEPARTMENT STORES", "BY4");
    typesHash.put("THE CBE GROUP", "BH9");
    typesHash.put("THE CHARTER SCHOOL SAFETY GROUP", "B39");
    typesHash.put("THE CHEESECAKE FACTORY", "BEL");
    typesHash.put("THE CHRIST HOSPITAL", "017");
    typesHash.put("THE COLLEGE BOARD", "BLY");
    typesHash.put("THE CULINARY INSTITUTE OF AMERICA", "BVY");
    typesHash.put("THE DANNON COMPANY, INC", "0TS");
    typesHash.put("THE EVANGELICAL LUTHERAN GOOD SAMAR", "BUI");
    typesHash.put("THE FEDERAL SAVINGS BANK", "B5G");
    typesHash.put("THE FIELD MUSEUM", "0V8");
    typesHash.put("THE FINISH LINE INC", "BUQ");
    typesHash.put("THE FRIEDKIN COMPANIES", "BSY");
    typesHash.put("THE GREAT ATLANTIC & PACIFIC TEA CO", "B1V");
    typesHash.put("THE GUNLOCKE COMPANY", "0AG");
    typesHash.put("THE HAVI GROUP", "A9F");
    typesHash.put("THE HOME DEPOT", "AU3");
    typesHash.put("THE HOSPITAL OF CENTRAL CONNECTICUT", "0IB");
    typesHash.put("THE J. PAUL GETTY TRUST", "A0L");
    typesHash.put("THE JACKSON LABORATORY", "AUM");
    typesHash.put("THE JOHNS HOPKINS HEALTH SYSTEM", "AOF");
    typesHash.put("THE KROGER CO.", "ALK");
    typesHash.put("THE MATLEN SILVER GROUP", "0UO");
    typesHash.put("THE MENTOR NETWORK", "BPE");
    typesHash.put("THE METHODIST HOSPITAL SYSTEM", "BMW");
    typesHash.put("THE NATIONAL AFSCME", "BQV");
    typesHash.put("THE NATIONAL GRANGE", "BVN");
    typesHash.put("THE NEBRASKA MEDICAL CENTER", "AYX");
    typesHash.put("THE NEW YORK FOUNDLING HOSPITAL", "B43");
    typesHash.put("THE NIELSEN COMPANY", "0DH");
    typesHash.put("THE ORDER OF UNITED COMMERCIAL TRAV", "B4M");
    typesHash.put("THE PACIFIC INSTITUTE", "0U5");
    typesHash.put("THE PEIR GROUP, LLC", "A8L");
    typesHash.put("THE PENN COMPANIES", "0U6");
    typesHash.put("THE ROBERT PLAN CORPORATION", "0VW");
    typesHash.put("THE SALVATION ARMY EASTERN TERRITOR", "BZH");
    typesHash.put("THE SALVATION ARMY WESTERN TERRITOR", "B1J");
    typesHash.put("THE SAN DIEGO UNION-TRIBUNE LLC", "A3I");
    typesHash.put("THE SHEVELL GROUP", "BD7");
    typesHash.put("THE ST. PAUL COMPANIES, INC", "0UB");
    typesHash.put("THE SUTHERLAND GRP., LTD.", "AOM");
    typesHash.put("THE TEXAS HOSPITAL ASSOCIATION", "0N6");
    typesHash.put("THE TIRE RACK, INC.", "AKY");
    typesHash.put("THE UNITED GROUP", "AF9");
    typesHash.put("THE UNIVERSITY OF CHICAGO MEDICINE", "B4I");
    typesHash.put("THE UNIVERSITY OF KANSAS HOSPITAL", "BBM");
    typesHash.put("THE VENETIAN CASINO RESORT", "B2C");
    typesHash.put("THE WESTERN UNION COMPANY", "BAU");
    typesHash.put("THE WESTMINSTER SCHOOLS", "0YZ");
    typesHash.put("THE WOLF ORGANIZATION INC.", "BCE");
    typesHash.put("THE YANKEE CANDLE COMPANY", "APK");
    typesHash.put("THERMO FISHER SCIENTIFIC", "AXC");
    typesHash.put("THOMASVILLE CITY SCHOOLS", "AQW");
    typesHash.put("THOMPSONHEALTH", "0K4");
    typesHash.put("THOMSON REUTERS", "0AV");
    typesHash.put("THRESHOLDS, INC", "BCU");
    typesHash.put("THRUPOINT, INC.", "AM4");
    typesHash.put("THUNDERBIRD SCHOOL OF GLOBAL MGMT", "ABI");
    typesHash.put("TIBCO SOFTWARE INC", "BME");
    typesHash.put("TIDEWELL HOSPICE & PALLATIVE CARE", "BO8");
    typesHash.put("TIME WARNER CABLE LLC", "B4O");
    typesHash.put("TIMKEN COMPANY", "0P1");
    typesHash.put("TISHMAN HOTEL & REALTY", "A14");
    typesHash.put("TIVO INC.", "BFL");
    typesHash.put("TJX COMPANIES", "017");
    typesHash.put("TMC HEALTHCARE", "0JQ");
    typesHash.put("T-MOBILE", "BU9");
    typesHash.put("TMOBILE", "BU9");
    typesHash.put("TOLEDO BOARD OF EDUCATION", "A28");
    typesHash.put("TOLL BROTHERS, INC.", "AGR");
    typesHash.put("TOLTZ, KING, DUVALL, ANDERSON AND A", "AM6");
    typesHash.put("TORAY PLASTICS", "0LJ");
    typesHash.put("TORCHMARK CORPORATION", "ANC");
    typesHash.put("TORY BURCH", "BZB");
    typesHash.put("TOWN OF SHREWSBURY", "BZ0");
    typesHash.put("TOWNE PROPERTIES ASSET MGT. CO.", "AMC");
    typesHash.put("TOYOTA BOSHOKU", "BJQ");
    typesHash.put("TOYOTA MOTOR MFG NORTH AMERICA", "07V");
    typesHash.put("TOYOTA MOTOR SALES", "A30");
    typesHash.put("TRAILER BRIDGE, INC.", "0SL");
    typesHash.put("TRANS UNION", "0QZ");
    typesHash.put("TRANSDIGM", "BL9");
    typesHash.put("TRANSIT FEDERAL CREDIT UNION 1181", "BP8");
    typesHash.put("TRANSIT MIX CONCRETE CORPORATION", "AHE");
    typesHash.put("TRANS-LUX CORPORATION", "0KN");
    typesHash.put("TRANSPLACE INC.", "BB9");
    typesHash.put("TRANSPORT WORKERS UNION LOCAL 234", "A9Y");
    typesHash.put("TRAVEL LEADERS GROUP, LLC", "BHL");
    typesHash.put("TRAVELPORT INC.", "A95");
    typesHash.put("TRC ENVIRONMENTAL CORPORATION", "0KO");
    typesHash.put("TREASURE ISLAND, LLC.", "BMI");
    typesHash.put("TREASURY WINE ESTATES AMERICAS CO", "BCW");
    typesHash.put("TRIANGLE AUTO CENTER INC", "B2R");
    typesHash.put("TRIBUNE COMPANY", "B15");
    typesHash.put("TRI-CITY MEDICAL CENTER", "A6C");
    typesHash.put("TRILOGY MANAGEMENT SERVICES, LLC", "BLD");
    typesHash.put("TRINET", "AVQ");
    typesHash.put("TRINITY HEALTH SYSTEMS", "017");
    typesHash.put("TRIPP LITE", "0Q7");
    typesHash.put("TRI-STATE MOTOR TRANSIT", "0AK");
    typesHash.put("TRIZETTO CORPORATION", "AD9");
    typesHash.put("TROPICANA LAS VEGAS", "B1S");
    typesHash.put("TRUMAN MEDICAL CENTER", "06A");
    typesHash.put("TRUMP ENTERTAINMENT RESORTS", "BQX");
    typesHash.put("TS TECH HOLDING COMPANY", "ASM");
    typesHash.put("T.S. TECH HOLDING COMPANY", "ASM");
    typesHash.put("TUALATIN VALLEY FIRE", "0S6");
    typesHash.put("TUFTS MEDICAL CENTER", "AUN");
    typesHash.put("TUFTS UNIVERSITY", "0AM");
    typesHash.put("TULLYS COFFEE", "BC5");
    typesHash.put("TURNER BROADCASTING SYSTEM", "06M");
    typesHash.put("TWIN CITIES ORTHOPEDIC SURGEONS", "B3D");
    typesHash.put("TWU LOCAL 100 NYC TRANSIT", "BSL");
    typesHash.put("TYCO INTERNATIONAL", "BM6");
    typesHash.put("TYSON FOODS", "ATL");
    typesHash.put("U.S. HEALTHWORKS HOLDING COMPANY", "BOF");
    typesHash.put("U.S. VENTURE, INC.", "07A");
    typesHash.put("UAW FORD", "BM3");
    typesHash.put("UBM, LLC", "0E8");
    typesHash.put("UC HEALTH", "BHT");
    typesHash.put("UCB INC.", "0TI");
    typesHash.put("UCHEALTH (COLORADO)", "B4K");
    typesHash.put("UCHICAGO ARGONNE, LLC, PLAN SPONSOR", "0RM");
    typesHash.put("UFCW LOCAL 227", "B3T");
    typesHash.put("UFCW8", "B0A");
    typesHash.put("UGL SERVICES", "BFC");
    typesHash.put("U-HAUL INTERNATIONAL INC.", "B40");
    typesHash.put("ULTA SALON COSMETICS & FRAGRANCE", "BVE");
    typesHash.put("UNC HEALTHCARE", "AB6");
    typesHash.put("UNI SELECT USA", "BB4");
    typesHash.put("UNIFIED POLICE DEPARTMENT", "BO3");
    typesHash.put("UNIFORMS TO YOU & CO.", "402");
    typesHash.put("UNILEVER", "AM1");
    typesHash.put("UNION BANK OF SWITZERLAND", "0D4");
    typesHash.put("UNION BOARD OF EDUCATION", "0MQ");
    typesHash.put("UNION PUBLIC SCHOOLS", "BLW");
    typesHash.put("UNISOURCE ENERGY CORPORATION", "BT6");
    typesHash.put("UNISOURCE WORLDWIDE", "A1K");
    typesHash.put("UNITED HEALTH SERVICES", "017");
    typesHash.put("UNITED HEALTHCARE CORPORATION", "0B6");
    typesHash.put("UNITED HOSPITAL SYSTEM INC", "BSG");
    typesHash.put("UNITED MEMORIAL MEDICAL CENTER", "0BG");
    typesHash.put("UNITED NATIONS", "017");
    typesHash.put("UNITED RENTALS", "BN0");
    typesHash.put("UNITED SPACE ALLIANCE", "007");
    typesHash.put("UNITED STATES BOWLING CONGRESS", "0OL");
    typesHash.put("UNITED STATES COLD STORAGE", "BU5");
    typesHash.put("UNITED STATES INFRASTRUCTURE CORP", "0O6");
    typesHash.put("UNITED STATES PARACHUTE ASSOCIATION", "BVG");
    typesHash.put("UNITED STATES POWER SQUADRONS", "BRQ");
    typesHash.put("UNITED STATIONERS INC.", "BVS");
    typesHash.put("UNITED SUPERMARKETS", "BQR");
    typesHash.put("UNITED TECHNOLOGIES", "017");
    typesHash.put("UNITED WATER", "0RN");
    typesHash.put("UNIV. OF N. CAROLINA GREENSBORO", "AAU");
    typesHash.put("UNIVERA HEALTHCARE OF WESTERN NY", "ASO");
    typesHash.put("UNIVERSAL FOREST PRODUCTS", "BG4");
    typesHash.put("UNIVERSAL HEALTH SERVICES", "BG8");
    typesHash.put("UNIVERSAL HOSPITAL SERVICES", "BN4");
    typesHash.put("UNIVERSAL LABORATORY", "APS");
    typesHash.put("UNIVERSAL TECHNICAL INSTITUTE", "A05");
    typesHash.put("UNIVERSAL TECHNICAL INSTITUTE ALUMN", "BWU");
    typesHash.put("UNIVERSITY CREDIT UNION", "A8E");
    typesHash.put("UNIVERSITY HEALTH ASSOCIATES", "A3U");
    typesHash.put("UNIVERSITY HOSPITALS HEALTH SYSTEM", "0BU");
    typesHash.put("UNIVERSITY OF ALABAMA HEALTH", "09L");
    typesHash.put("UNIVERSITY OF BUFFALO FOUNDATION", "0ML");
    typesHash.put("UNIVERSITY OF KENTUCKY", "ATN");
    typesHash.put("UNIVERSITY OF MAINE SYSTEM", "BM5");
    typesHash.put("UNIVERSITY OF MASSACHUSETTS", "05T");
    typesHash.put("UNIVERSITY OF MD MED SYST", "04H");
    typesHash.put("UNIVERSITY OF PHOENIX INC", "BMD");
    typesHash.put("UNIVERSITY OF ROCHESTER", "ASX");
    typesHash.put("UNIVERSITY OF UTAH", "08Y");
    typesHash.put("UNIVERSITY OF UTAH HOSP & CLINICS", "BW1");
    typesHash.put("UNIVISION COMMUNICATIONS", "BQW");
    typesHash.put("UPMC HEALTH", "0YP");
    typesHash.put("UPS", "BDV");
    typesHash.put("URS CORPORATION", "017");
    typesHash.put("US AIRWAYS", "0BM");
    typesHash.put("US LBM HOLDINGS, LLC", "B3G");
    typesHash.put("US MARINE", "01Y");
    typesHash.put("US STEEL CORP", "0F0");
    typesHash.put("USA MOBILITY", "A3H");
    typesHash.put("USA TRIATHLON", "B2Q");
    typesHash.put("USBA INC.", "A5X");
    typesHash.put("USBA INC.", "A5X");
    typesHash.put("USBA INC.", "A5X");
    typesHash.put("USBA INC.", "A5X");
    typesHash.put("USBA INC.", "A5X");
    typesHash.put("USBA INC.", "A5X");
    typesHash.put("UT MEDICAL GROUP", "BXR");
    typesHash.put("UTAH STATE UNIV RESEARCH FOUNDATION", "BPS");
    typesHash.put("UTAH STATE UNIVERSITY", "0LB");
    typesHash.put("UTAH VALLEY UNIVERSITY", "ANH");
    typesHash.put("UW PHYSICIAN NETWORK", "AP0");
    typesHash.put("VAIL RESORTS MANAGEMENT COMPANY", "BQ9");
    typesHash.put("VAL VERDE REGIONAL MEDICAL CENTER", "AF6");
    typesHash.put("VALASSIS COMMUNICATIONS", "0AJ");
    typesHash.put("VALEO SYLVANIA, LLC", "B5C");
    typesHash.put("VALERO ENERGY CORPORATION", "BNE");
    typesHash.put("VALLEY BAPTIST MEDICAL CENTER", "BVM");
    typesHash.put("VALLEY MEDICAL CENTER", "AJZ");
    typesHash.put("VANCE COUNTY SCHOOLS", "ASU");
    typesHash.put("VANDERBILT UNIVERSITY", "ABF");
    typesHash.put("VANGUARD GROUP", "017");
    typesHash.put("VANGUARD HEALTH SYSTEMS INC.", "BS0");
    typesHash.put("VANTAGE ONCOLOGY", "B3U");
    typesHash.put("VARIAN MEDICAL SYSTEMS", "017");
    typesHash.put("VB SMART SOLUTIONS", "AQM");
    typesHash.put("VCU HEALTH SYSTEM", "BK0");
    typesHash.put("VECTREN CORP.", "08M");
    typesHash.put("VELCRO USA INC.", "BOT");
    typesHash.put("VENTANA MEDICAL SYSTEMS", "AJG");
    typesHash.put("VEOLIA TRANSPORTATION", "ARN");
    typesHash.put("VERIO", "0X5");
    typesHash.put("VERISIGN, INC", "AL4");
    typesHash.put("VERIZON", "AGA");
    typesHash.put("VERTAFORE, INC.", "ADO");
    typesHash.put("VERTEX GROUP", "BNR");
    typesHash.put("VERTIS COMMUNICATIONS", "A9V");
    typesHash.put("VESCOM CORPORATION", "B5M");
    typesHash.put("VESUVIUS USA CORPORATION", "B2Z");
    typesHash.put("VF CORPORATION", "017");
    typesHash.put("VIA TECHNOLOGY", "A5K");
    typesHash.put("VIAD", "0IS");
    typesHash.put("VIASAT, INC.", "AJO");
    typesHash.put("VICTAULIC COMPANY", "BXF");
    typesHash.put("VIRGINA HOSPITAL CENTER", "B2U");
    typesHash.put("VISA", "BS2");
    typesHash.put("VISANT", "0SH");
    typesHash.put("VISION SERVICE PLAN", "BAS");
    typesHash.put("VISIONS FEDERAL CREDIT UNION", "B0K");
    typesHash.put("VISTEON", "017");
    typesHash.put("VMWARE, INC.", "BXY");
    typesHash.put("VNA OF RHODE ISLAND", "AJ4");
    typesHash.put("VOICE MEDIA GROUP, INC.", "ALJ");
    typesHash.put("VOLKSWAGEN GROUP OF AMERICA", "B1E");
    typesHash.put("VUTEQ CORPORATION", "0QB");
    typesHash.put("VWR INTERNATIONAL INC", "BGQ");
    typesHash.put("W. W. GRAINGER", "01Z");
    typesHash.put("W W GRAINGER", "01Z");
    typesHash.put("WW GRAINGER", "01Z");
    typesHash.put("W.E. AUBUCHON", "08C");
    typesHash.put("WE AUBUCHON", "08C");
    typesHash.put("W E AUBUCHON", "08C");
    typesHash.put("W.R. BONSAL COMPANY", "ALH");
    typesHash.put("W R BONSAL COMPANY", "ALH");
    typesHash.put("WR BONSAL COMPANY", "ALH");
    typesHash.put("WACHUSETT REGIONAL SCHOOL DISTRICT", "BT7");
    typesHash.put("WAKE FOREST UNIVERSITY", "ASV");
    typesHash.put("WAKEFERN CORPORATE", "ATX");
    typesHash.put("WALKER & DUNLOP, LLC", "B44");
    typesHash.put("WALTER ENERGY, INC", "ATI");
    typesHash.put("WARD TRUCKING", "ALY");
    typesHash.put("WARNACO GROUP, INC", "BBL");
    typesHash.put("WARNER MUSIC GROUP", "BRI");
    typesHash.put("WASHINGTON MANUFACTURERS COUNCIL", "A3E");
    typesHash.put("WASHINGTON REGIONAL MEDICAL SYSTEM", "APH");
    typesHash.put("WASHINGTON STATE PTA", "BJF");
    typesHash.put("WATERWORKS, INC.", "ABN");
    typesHash.put("WAYNE MEMORIAL HOSPITAL", "BFJ");
    typesHash.put("WAYNESBORO HOSPITAL", "AAT");
    typesHash.put("WB MASON", "AXM");
    typesHash.put("WEATHERFORD INTERNATIONAL", "BUH");
    typesHash.put("WEBASTO ROOF SYSTEMS, INC", "AZU");
    typesHash.put("WEBER STATE UNIVERSITY", "BIF");
    typesHash.put("WEBMD", "BHI");
    typesHash.put("WEBSTER BANK", "0PA");
    typesHash.put("WEEKS MARINE, INC", "BVX");
    typesHash.put("WELLINGTON MANAGEMENT", "B0I");
    typesHash.put("WELLSPAN HEALTH", "A0S");
    typesHash.put("WEST MARINE PRODUCTS", "BFW");
    typesHash.put("WEST VIRGINIA AUTO & TRUCK DEALERS", "A9W");
    typesHash.put("WEST VIRGINIA MANUFACTURERS ASSOC.", "BAB");
    typesHash.put("WESTAR ENERGY", "ACB");
    typesHash.put("WESTCHESTER COMMUNITY COLLEGE ALUMN", "BYN");
    typesHash.put("WESTERLY HOSPITAL", "ALV");
    typesHash.put("WESTERN CONNECTICUT HEALTH NETWORK", "004");
    typesHash.put("WESTERN DENTAL SERVICES, INC.", "AH9");
    typesHash.put("WESTINGHOUSE ELECTRIC", "017");
    typesHash.put("WESTINGHOUSE LIGHTING CORPORATION", "0WE");
    typesHash.put("WESTLAKE HARDWARE INC.", "A1I");
    typesHash.put("WESTMINSTER COLLEGE", "AZT");
    typesHash.put("WESTON SOLUTIONS", "BH8");
    typesHash.put("WICHITA CLINIC", "0GB");
    typesHash.put("WIEDEN & KENNEDY", "AKV");
    typesHash.put("WILLIAM JEWELL COLLEGE", "0I2");
    typesHash.put("WILLIAMS LEA, INC.", "A2U");
    typesHash.put("WILLIAMS SCOTSMAN INC.", "BI6");
    typesHash.put("WILLIS NORTH AMERICA INC.", "02D");
    typesHash.put("WILLOW VALLEY RETIREMENT", "0TF");
    typesHash.put("WILSON INTERNATIONAL, INC.", "BFY");
    typesHash.put("WILSON TECHNICAL COMMUNITY COLLEGE", "0JT");
    typesHash.put("WILTON BRANDS LLC", "B2V");
    typesHash.put("WINCO FOODS, INC", "05P");
    typesHash.put("WINDSTREAM COMMUNICATIONS", "BNF");
    typesHash.put("WINGATE HEALTHCARE", "A3Q");
    typesHash.put("WINN-DIXIE STORES INC", "A31");
    typesHash.put("WINSTON & STRAWN LLP", "BAJ");
    typesHash.put("WINTHROP UNIVERSITY HOSPITAL", "03D");
    typesHash.put("WIPRO LTD", "B2P");
    typesHash.put("WMS INDUSTRIES, INC", "B2G");
    typesHash.put("WOLF CREEK NUCLEAR OPER CORP", "0IA");
    typesHash.put("WOLTERS KLUWER US CORP", "ARS");
    typesHash.put("WOOD GROUP", "BWR");
    typesHash.put("WOODBRIDGE TOWNSHIP BOARD OF ED", "0U1");
    typesHash.put("WOODMEN OF THE WORLD", "BWT");
    typesHash.put("WOODRUFF SAWER & CO.", "BCJ");
    typesHash.put("WOODWARD, INC", "0GC");
    typesHash.put("WORKERS COMPENSATION FUND", "BDU");
    typesHash.put("WORLD KITCHEN", "A6O");
    typesHash.put("WORLD TRAVEL HOLDINGS", "AUG");
    typesHash.put("WORLD TRAVELERS OF AMERICA, INC.", "BHE");
    typesHash.put("WORLDWIDE EQUIPMENT INC", "A9B");
    typesHash.put("WPP GROUP", "07E");
    typesHash.put("WTAS, LLC", "BKF");
    typesHash.put("WYLE", "BF0");
    typesHash.put("WYNN RESORTS", "017");
    typesHash.put("XCEL ENERGY", "006");
    typesHash.put("XCEL FEDERAL CREDIT UNION", "BUU");
    typesHash.put("XCEL HR", "B11");
    typesHash.put("XERIUM TECHNOLOGIES, INC.", "AK5");
    typesHash.put("XEROX BUSINESS SERVICES, LLC", "002");
    typesHash.put("XEROX CORPORATION", "08V");
    typesHash.put("XEROX-NASG", "017");
    typesHash.put("XILINX INC", "AWI");
    typesHash.put("XIUS BCGI", "0WV");
    typesHash.put("XTRA CORPORATION", "AEZ");
    typesHash.put("XYLEM INC.", "B1F");
    typesHash.put("YALE NEW HAVEN HEALTH SYSTEM", "017");
    typesHash.put("YALE UNIVERSITY", "BTH");
    typesHash.put("YAMAHA MOTOR CORPORATION, USA", "BFO");
    typesHash.put("YASKAWA AMERICA, INC. - MOTOMAN ROB", "ADT");
    typesHash.put("YASKAWA ELECTRIC AMERICA, INC.", "ABZ");
    typesHash.put("YAZAKI NORTH AMERICA, INC.", "ADX");
    typesHash.put("YELLOW ROADWAY CORP., WORLDWIDE", "04D");
    typesHash.put("YESCO", "0YK");
    typesHash.put("YM LLC USA", "B05");
    typesHash.put("YOAKUM COMMUNITY HOSPITAL", "AF5");
    typesHash.put("YOGA ALLIANCE", "B5I");
    typesHash.put("YOUNG ADULT INSTITUTE", "A1D");
    typesHash.put("YOUNG AND RUBICAM BRANDS", "06G");
    typesHash.put("YWCA OF GREATER PITTSBURGH", "0UF");
    typesHash.put("ZALE CORPORATION", "017");
    typesHash.put("ZAPPOS.COM INC", "BJO");
    typesHash.put("ZOCDOC", "B2O");
    typesHash.put("ZOETIS, INC", "B4H");
    typesHash.put("ZYGO CORPORATION", "AC1");
    typesHash.put("ZYNGA GAME NETWORK INC.", "BOU");
    function getURLParameter(name) {
        name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
        var regexS = "[\\?&]" + name + "=([^&#]*)";
        var regex = new RegExp(regexS);
        var results = regex.exec(window.location.href);
        if (results == null)
            return "";
        else
            return results[1];
    }

    function getCode(companyName) {
        var incomingParams = "";
        var ocID = getURLParameter("oc_id");
        var promoID = getURLParameter("promoid");
        var groupCode = getURLParameter("GPC");
        var nativeGroupCode = typesHash.get(companyName);
        if (ocID == "" && promoID == "" && groupCode == "") {
            incomingParams = "https://autohome.metlife.com/public/index.jsp" + "?GPC=" + nativeGroupCode + "%26oc_id=al000100%26promoid=B0178";
        } else if (groupCode == "" && promoID == "") {
            incomingParams = "https://autohome.metlife.com/public/index.jsp" + "?GPC=" + nativeGroupCode + "%26oc_id=" + ocID + "%26promoid=B0178";
        } else if (groupCode == "" && ocID == "") {
            incomingParams = "https://autohome.metlife.com/public/index.jsp" + "?GPC=" + nativeGroupCode + "%26oc_id=al000100%26promoid=" + promoID;
        } else if (promoID == "" && ocID == "") {
            incomingParams = "https://autohome.metlife.com/public/index.jsp" + "?GPC=" + groupCode + "%26oc_id=al000100%26promoid=B0178";
        } else if (groupCode == "") {
            incomingParams = "https://autohome.metlife.com/public/index.jsp" + "?GPC=" + nativeGroupCode + "%26oc_id=" + ocID + "%26promoid=" + promoID;
        } else if (promoID == "") {
            incomingParams = "https://autohome.metlife.com/public/index.jsp" + "?GPC=" + groupCode + "%26oc_id=" + ocID + "%26promoid=B0178";
        } else if (ocID == "") {
            incomingParams = "https://autohome.metlife.com/public/index.jsp" + "?GPC=" + groupCode + "%26oc_id=al000100%26promoid=" + promoID;
        }
        else {
            incomingParams = "https://autohome.metlife.com/public/index.jsp" + "?GPC=" + groupCode + "%26promoid=" + promoID + "%26oc_id=" + ocID;
        }
        incomingParams = decodeURIComponent(incomingParams);
        location.href = incomingParams;
    }

    var suggestions = new Array("24 HOUR FITNESS",
        "3M",
        "7-ELEVEN",
        "7 ELEVEN",
        "7ELEVEN",
        "A. H. BELO CORPORATION",
        "AH BELO CORPORATION",
        "A.T. CROSS COMPANY",
        "AT CROSS COMPANY",
        "AANA",
        "AAR CORP",
        "AB MAURI FOOD, INC",
        "ABB",
        "ABM INDUSTRIES INCORPORATED",
        "ABRAXAS CORPORATION",
        "ACCELRYS",
        "ACCENTURE LLP",
        "ACCESSPOINT, L.L.C.",
        "ACCO BRANDS INC.",
        "ACCOUNT SOLUTIONS GROUP, LLC",
        "ACCOUNTANTS ON CALL",
        "ACE GROUP OF INSURANCE COMPANIES",
        "ACTIVISION BLIZZARD",
        "ACUITY BRANDS",
        "ADC TELECOMMUNICATIONS",
        "ADECCO",
        "ADENA REGIONAL HEALTH SYSTEMS",
        "ADMIRAL BEVERAGE CORPORATION",
        "ADMIRALS BANK",
        "ADOBE SYSTEMS INC",
        "ADP",
        "ADP TOTALSOURCE, INC.",
        "ADT, LLC",
        "ADVANCE AUTO PARTS",
        "ADVANCED RESOURCE TECHNOLOGIES",
        "ADVANTAGE NURSING SERVICES",
        "ADVENTIST HEALTH SYSTEM/WEST",
        "ADVOCATE HEALTH CARE",
        "AECOM",
        "AEGIS MEDIA NORTH AMERICA",
        "AEROBICS & FITNESS ASOC. OF AMERICA",
        "AEROPOSTALE INC.",
        "AFFILIATED DISTRIBUTORS",
        "AFFILIATED OPTOMETRISTS OF WALMART",
        "AFFINITYTESTING DO NOT USE",
        "AFSCME COUNCIL 93 BOSTON",
        "AFSCME COUNCIL 93 SUMUP",
        "AFSCME MAINE MEMBERSHIP BENEFIT FND",
        "AFSCME RETIREE CHAPTER 93",
        "AGC AMERICA, INC.",
        "AGCO CORPORATION",
        "AGGREGATE INDUSTRIES",
        "AGL RESOURCES INC",
        "AGRI MARK",
        "AGRICREDIT ACCEPTANCE COMPANY",
        "AIMIA PROPRIETARY LOYALTY U.S. INC.",
        "AIR EVAC SERVICES INC",
        "AIR METHODS CORPORATION",
        "AIRBORN MANAGEMENT, INC.",
        "AIRGAS, INC.",
        "AIRLINE TRAINING CENTER ARIZONA, IN",
        "AJCP",
        "AKIMA, LLC",
        "AKRON GENERAL HEALTH SYSTEM",
        "ALAMEDA COUNTY MEDICAL CENTER",
        "ALAMOSA SCHOOL DISTRICT",
        "ALASKA AIR GROUP",
        "ALBANY INTERNATIONAL",
        "ALBEMARLE CORPORATION",
        "ALBERTSON'S INC",
        "ALBERTSON'S LLC",
        "ALCOA",
        "ALEGENT CREIGHTON HEALTH",
        "ALENT, INC",
        "ALEXANDRIA EXTRUSION COMPANY",
        "ALIANTE GAMING, LLC",
        "ALIGN TECHNOLOGY",
        "ALKERMES INC",
        "ALLEGIS GROUP",
        "ALLERGAN INC",
        "ALLIANCE DATA SYSTEMS",
        "ALLIANCE FOR AFFORDABLE SERVICES",
        "ALLIANCE HEALTHCARE SERVICES",
        "ALLIANCE RESIDENTIAL, LLC",
        "ALLIANT ENERGY",
        "ALLIANT TECHSYSTEMS",
        "ALLIANZ",
        "ALLIED HOLDINGS, INC.",
        "ALLINA HEALTH SYSTEM",
        "ALLISON TRANSMISSION, INC.",
        "ALLSCRIPTSMISYS HEALTHCARE SOLUTION",
        "ALPHA NATURAL RESOURCES, INC.",
        "ALPHARMA USPD",
        "ALPHASOFT SERVICES CORPORATION",
        "ALPHASTAFF INC",
        "ALSAC, ST. JUDE CHILDRENS RESEARCH",
        "ALSTOM",
        "ALTEGRITY, INC.",
        "ALTERA CORPORATION",
        "ALTERNATIVE RESOURCES CORPORATION",
        "ALTOONA REGIONAL HEALTH SYSTEM",
        "ALTRIA",
        "ALUMNI ASSOC COLLEGE OF LAKE COUNTY",
        "AMADEUS AMERICAS INC",
        "AMALGAMATED LIFE INSURANCE",
        "AMBROSE EMPLOYER GROUP LLC",
        "AMDOCS",
        "AMERICA SERVICE GROUP",
        "AMERICAN ACADEMY OF OTOLARYNGOLOGY",
        "AMERICAN AIRLINES",
        "AMERICAN ASSOCIATION OF CLINICAL EN",
        "AMERICAN BASS ANGLERS ASSOCIATION",
        "AMERICAN BOATING ASSOCIATION, INC",
        "AMERICAN BUREAU OF SHIPPING",
        "AMERICAN CANCER SOCIETY",
        "AMERICAN CENTURY SERVICES, LLC",
        "AMERICAN CHAMBER OF COMMERCE",
        "AMERICAN CHIROPRACTIC ASSOCIATION",
        "AMERICAN COLLEGE OF OSTEOPATHIC FAM",
        "AMERICAN COMMERCIAL LINES, LLC",
        "AMERICAN COUNCIL OF ENGINEERING",
        "AMERICAN DIABETES ASSOCIATION",
        "AMERICAN EAGLE AIRLINES, INC",
        "AMERICAN ELECTRIC POWER",
        "AMERICAN EXPRESS BANKING CORP",
        "AMERICAN FEDERATION OF GOVT EMPLOYE",
        "AMERICAN FEDERATION OF TEACHERS",
        "AMERICAN FEDERATION OF TEACHERS,CT",
        "AMERICAN GREETINGS",
        "AMERICAN HOTEL REGISTER COMPANY",
        "AMERICAN HUMANE ASSOCIATION",
        "AMERICAN MASSAGE THERAPY ASSOC",
        "AMERICAN PACKAGING CORP.",
        "AMERICAN POSTAL WORKERS UNION",
        "AMERICAN RADIO RELAY LEAGUE",
        "AMERICAN RED CROSS",
        "AMERICAN REPROGRAPHICS COMPANY",
        "AMERICAN SHOWA",
        "AMERICAN SYSTEMS CORPORATION",
        "AMERICAN TIRE DISTRIBUTORS INC.",
        "AMERICAN UNIVERSITY",
        "AMERICAN VETERANS",
        "AMERICANS FOR FINANCIAL SECURITY",
        "AMERICOLD LOGISTICS",
        "AMERIGROUP CORPORATION",
        "AMERISOURCE BERGEN",
        "AMERLUX, INC,",
        "AMTROL INCORPORATED",
        "AMWAY",
        "ANACOMP",
        "ANALOG DEVICES, INC.",
        "ANALOGIC CORPORATION",
        "ANALYSTS INTERNATIONAL",
        "ANDRITZ INC",
        "ANGIOTECH PHARMACEUTICALS INC",
        "ANIXTER, INC.",
        "ANSALDO STS UNA, INC.",
        "ANSCHUTZ ENTERTAINMENT GROUP, INC",
        "ANSON COUNTY SCHOOLS",
        "ANSWERTHINK CONSULTING GROUP",
        "ANTHEM EDUCATION GROUP",
        "ANZA, INC.",
        "AON CORPORATION",
        "APACHE JUNCTION UNIFIED SCHOOL",
        "APPLE INC",
        "APPLEBEE'S INTERNATIONAL",
        "APPLETON COATED",
        "APPLICA CONSUMER PRODUCTS INC.",
        "APPLIED TECHNOLOGY SYSTEMS, INC.",
        "APRIA HEALTH",
        "APS HEALTHCARE INC",
        "APTARGROUP",
        "APTIS",
        "ARAMARK CORPORATION",
        "ARBOR HOUSE ASSISTED LIVING CENTER",
        "ARCHSTONE COMMUNITIES",
        "AREVA INC",
        "ARIZONA CHARTER SCHOOL",
        "ARIZONA GOLF ASSOCIATION",
        "ARIZONA STATE UNIVERSITY",
        "ARKANSAS STATE EMPLOYEE ASSOCIATION",
        "ARMED SERV. BEN.",
        "ARMED SERVICES MUTUAL BENEFIT ASSOC",
        "ARMSTRONG WORLD INDUSTRIES",
        "ARNOLD WORLDWIDE CORPORATION",
        "ARNOT OGDEN MEDICAL CENTER",
        "ARQULE",
        "ARRIS",
        "ARROW ELECTRONICS INC.",
        "ARROW EXTERMINATORS, INC.",
        "ARUP LABORATORIES",
        "ASCAP",
        "ASCEND ONE CORPORATION",
        "ASHEVILLE-BUNCOMBE TECH COMMUNITY",
        "ASHLAND INC.",
        "ASML US, INC.",
        "ASPECT SOFTWARE INC.",
        "ASPIRE",
        "ASPIRE FCU",
        "ASPIRUS, INC.",
        "ASSOCIATED CREDIT UNION OF TEXAS",
        "ASSOCIATED FOOD STORES",
        "ASSOCIATED INDUSTRIES",
        "ASSOCIATED MATERIALS INCORPORATED",
        "ASSOCIATION OF AMERICAN MEDICAL COL",
        "ASTRAZENECA PHARMACEUTICALS LP",
        "ASTRONICS CORPORATION",
        "ASURION INSURANCE SERVICES INC",
        "AT&T",
        "AT&T",
        "ATARI",
        "ATI LADISH LLC",
        "ATKINS",
        "ATKORE INTERNATIONAL LTD",
        "ATMOS ENERGY CORP",
        "ATR INTERNATIONAL, INC",
        "AUBURN COMMUNITY HOSPITAL",
        "AUSTIN INDEPENDENT SCHOOL DISTRICT",
        "AUTODESK, INC.",
        "AUTOZONE PARTS INC",
        "AVAYA",
        "AVBORNE INC",
        "AVERA MCKENNAN HOSPITAL",
        "AVERY DENNISON",
        "AVIATION TECHNICAL SERVICES, INC",
        "AVID TECHNOLOGY",
        "AVIS BUDGET GROUP",
        "AVISTA CORPORATION",
        "AVNET, INC.",
        "AVON AUTOMOTIVE INC,",
        "AVON RUBBER & PLASTICS, INC.",
        "AXA EQUITABLE LIFE INSURANCE",
        "AXCET HR SOLUTIONS",
        "AZPB LP D/B/A ARIZONA",
        "B BRAUN MEDICAL INC.",
        "B. BRAUN MEDICAL INC.",
        "BABCOCK AND WILCOX INVESTMENT CO.",
        "BADGER METER, INC.",
        "BAE SYSTEMS INC",
        "BAIN & COMPANY INC.",
        "BALFOUR BEATTY CONSTRUCTION",
        "BALFOUR BEATTY INVESTMENTS",
        "BALFOUR BEATTY, INC.",
        "BALL STATE UNIVERSITY",
        "BALLY TECHNOLOGIES, INC.",
        "BALSZ SCHOOL DISTRICT 31",
        "BALTIMORE GAS & ELECTRIC",
        "BANCO DE SABADELL SA",
        "BANFIELD, THE PET HOSPITAL",
        "BANK OF AMERICA",
        "BANK OF THE WEST",
        "BANK OF TOKYO - MITSUBISHI UFJ, LTD",
        "BANKERS INSURANCE",
        "BANNER HEALTH ARIZONA",
        "BAPTIST HEALTH - ARKANSAS",
        "BAPTIST HEALTH CARE",
        "BARCLAY BANK",
        "BARCO, INC.",
        "BARNARD COLLEGE",
        "BARNES GROUP, INC.",
        "BARRETT BUSINESS SERVICES",
        "BARRINGTON BROADCASTING GROUP",
        "BARTOW COUNTY SCHOOL SYSTEM",
        "BASF",
        "BATES USA",
        "BATTLE GROUND SCHOOL DISTRICT.",
        "BAXTER INTERNATIONAL INC",
        "BAYCARE HEALTH SYSTEMS",
        "BAYER CORPORATE & BUSINESS SVCS,LLC",
        "BAYLOR HEALTH CARE SYSTEM",
        "BBDO",
        "BD",
        "BE&K, INC.",
        "BEAULIEU GROUP, LLC",
        "BEAUMONT",
        "BEAUMONT SERVICES",
        "BECU",
        "BEHAVIORAL HEALTH NETWORK, INC",
        "BELK STORES",
        "BELL AND HOWELL, LLC",
        "BELO CORPORATION",
        "BELTSERVICE CORPORATION",
        "BEMIS COMPANY, INC.",
        "BENCHMARK ASSISTED LIVING",
        "BENCHMARK ELECTRONICS, INC.",
        "BENEDICTINE UNIVERSITY",
        "BENTLEY COLLEGE",
        "BENTLEY SYSTEMS, INC.",
        "BENTON EXPRESS, INC.",
        "BERKSHIRE PROPERTY ADVISORS",
        "BERRY PLASTICS",
        "BERTELSMANN, INC.",
        "BEST WESTERN INTERNATIONAL",
        "BETTERINVESTING",
        "BI, INCORPORATED",
        "BILL AND MELINDA GATES FOUNDATION",
        "BILLY GRAHAM EVANGELISTIC ASSOC.",
        "BI-LO, LLC",
        "BIMBO BAKERIES USA/WEST",
        "BIOGEN",
        "BIOMEDICAL ENGINEERING SOCIETY",
        "BLACK & DECKER TAMPA",
        "BLACKROCK",
        "BLOODCENTER OF WISCONSIN, INC",
        "BLOOMBERG LP",
        "BLUE CROSS & BLUE SHIELD / RI",
        "BLUE CROSS & BLUE SHIELD OF ARIZONA",
        "BLUE CROSS BLUE SHIELD OF MASS",
        "BLUE CROSS OF IDAHO",
        "BLUE CROSS/BLUE SHIELD OF KANSAS CI",
        "BLUE CROSS/BLUE SHIELD OF UTICA/WAT",
        "BLUE CROSS/C. NY",
        "BLUE CROSS/MN",
        "BLUE CROSS/NC",
        "BLUE RIDGE COMMUNITY COLLEGE",
        "BLUE SHIELD OF CALIFORNIA",
        "BLUMBERG EXCELSIOR",
        "BLYTH, INC.",
        "BMC",
        "BMC SOFTWARE",
        "BMW MANUFACTURING CORP.",
        "BMW OF NORTH AMERICA",
        "BNP PARIBAS",
        "BNY MELLON",
        "BOART LONGYEAR CO",
        "BOEHRINGHER INGELHEIM CORPORATION",
        "BOISE STATE UNIVERSITY",
        "BOOZ & COMPANY",
        "BOOZ ALLEN HAMILTON INC",
        "BOSLEY, INC",
        "BOSTON COLLEGE",
        "BOSTON FINANCIAL DATA SERVICES",
        "BOSTON MARKET",
        "BOSTON MEDICAL CENTER",
        "BOSTON SCIENTIFIC",
        "BOURN'S INC.",
        "BOWNE & COMPANY, INC.",
        "BP CORPORATION NORTH AMERICA INCORP",
        "BRACCO DIAGNOSTICS INC.",
        "BRADLEY COUNTY MEDICAL CENTER",
        "BRIDGEPOINT EDUCATION, INC.",
        "BRIDGESTONE AMERICAS INCORPORATED",
        "BRISTOL HOSPITAL",
        "BROAD INSTITUTE",
        "BROADCOM CORP",
        "BROADRIDGE FINANCIAL SOLUTIONS, INC",
        "BROCADE COMMUNICATIONS SYSTEMS",
        "BROWN SHOE",
        "BRYANT UNIVERSITY",
        "BT AMERICAS HOLDINGS, INC.",
        "BUCA, INC",
        "BUCKS COUNTY COMMUNITY COLLEGE ALU",
        "BULL INFORMATION SYSTEMS",
        "BUREAU VERITAS INDUSTRIES & FAC",
        "BURT HILL KOSAR RITTELMAN ASSOCIATE",
        "BUTLER INTERNATIONAL",
        "BUTLER SCHEIN ANIMAL HEALTH",
        "C & M CORPORATION",
        "C&M CORPORATION",
        "C R ENGLAND",
        "C.R. ENGLAND",
        "C&S WHOLESALE GROCERS",
        "C & S WHOLESALE GROCERS",
        "C.H. ROBINSON WORLDWIDE, INC.",
        "CH ROBINSON WORLDWIDE, INC.",
        "CA, INC",
        "CABELA'S INC",
        "CABOT CORPORATION",
        "CACI INTERNATIONAL",
        "CADENCE DESIGN SYSTEMS, INC.",
        "CAJUN OPERATING COMPANY",
        "CALDWELL COMMUNITY COLLEGE",
        "CALIFORNIA BUILDERS EXCHANGES INSUR",
        "CALIFORNIA CORRECTIONAL SUPERVISORS",
        "CALIFORNIA INSTITUTE OF TECHNOLOGY",
        "CALPORTLAND",
        "CALSONIC KANSEI NORTH AMERICA",
        "CAMBRIDGE HEALTH ALLIANCE",
        "CAMDEN CLARK MEMORIAL HOSPITAL",
        "CAMPBELL SOUP COMPANY",
        "CANBERRA INDUSTRIES",
        "CANTOR FITZGERALD LLC",
        "CAPE FEAR COMMUNITY COLLEGE",
        "CAPGEMINI AMERICA INC,",
        "CAPITAL DISTRICT PHYSICIANS",
        "CAPITAL ONE FINANCIAL CORPORATION",
        "CAPSUGEL",
        "CARAUSTAR INDUSTRIES",
        "CARDINGTON YUTAKA TECHNOLOGIES",
        "CARE NEW ENGLAND",
        "CARE TECH SOLUTIONS",
        "CAREER EDUCATION CORPORATION",
        "CARL ZEISS VISION INC.",
        "CARLE FOUNDATION HOSPITAL",
        "CARLSON COMPANIES",
        "CAROLINAS HEALTHCARE SYSTEM",
        "CAROMONT HEALTH",
        "CARONDELET HEALTH NETWORK",
        "CARQUEST",
        "CARROLL HOSPITAL CENTER",
        "CARTERET COMMUNITY COLLEGE",
        "CASCADE VALLEY HOSPITAL & CLINICS",
        "CASCADES TISSUE GROUP SALES INC.",
        "CASE WESTERN RESERVE UNIVERSITY",
        "CASTEC, INC.",
        "CATERPILLAR",
        "CATERPILLAR INSURANCE SERVICES CORP",
        "CATHOLIC HEALTH EAST",
        "CB RICHARD ELLIS/WHITTIER PARTNERS",
        "CBEYOND COMMUNICATIONS",
        "CBS RADIO",
        "CDM SMITH",
        "CEDARAPIDS,INC.",
        "CEDARS-SINAI MEDICAL CENTER",
        "CELANESE AMERICAS CORPORATION",
        "CENTEGRA HEALTH SYSTEM",
        "CENTERPOINT ENERGY",
        "CENTRA SOFTWARE",
        "CENTRACARE HEALTH SYSTEM",
        "CENTRAL ARIZONA PROJECT",
        "CENTRAL HEALTHCARE SERVICES INC.",
        "CENTRAL MAINE MEDICAL CENTER",
        "CENTRAL PURCHASING, INC",
        "CENTURA HEALTH",
        "CENTURION INDUSTRIES",
        "CENTURY BANCORP",
        "CENTURYLINK",
        "CENVEO",
        "CEPHEID",
        "CERIDIAN",
        "CERTIFIED PUBLIC ACCOUNTS OF NH",
        "CF INDUSTRIES",
        "CGI-AMS INC.",
        "CH2M HILL",
        "CHAGRIN FALLS SCHOOLS PPT 81",
        "CHANDLER UNIFIED SCHOOL DISTRICT",
        "CHAPARRAL ENERGY",
        "CHARLES SCHWAB CORPORATION",
        "CHARLOTTE HUNGERFORD HOSPITAL",
        "CHARLOTTE-MECKLENBURG SCHOOLS",
        "CHART INDUSTRIES, INC.",
        "CHARTER COMMUNICATIONS, INC.",
        "CHARTER HR",
        "CHEROKEE COUNTY BOARD OF EDUCATION",
        "CHEVRON CORPORATION",
        "CHEVRON RETIREE ASSOCIATION",
        "CHG COMPANIES INC",
        "CHICAGO ASSOCIATION FOR RETARDED CI",
        "CHICAGO BRIDGE & IRON (CB&I)",
        "CHICAGO LIGHTHOUSE",
        "CHILDREN'S HEALTH SYSTEM",
        "CHILDREN'S HEALTHCARE OF ATLANTA",
        "CHILDRENS HOME + AIDE SOCIETY OF IL",
        "CHILDREN'S HOSPITAL BOSTON",
        "CHILDREN'S HOSPITAL MEDICAL CENTER",
        "CHILDREN'S MERCY HOSPITAL",
        "CHILDRENS SPECIALIZED HOSPITAL",
        "CHIPOTLE MEXICAN GRILL, INC.",
        "CHRIST HOSPITAL",
        "CHRISTIANA CARE HEALTH SYSTEM",
        "CHRYSLER GROUP LLC",
        "CHRYSLER GROUP LLC - REPRESENTED",
        "CIENA CORPORATION",
        "CIGNA",
        "CINCINNATI BELL, INC.",
        "CIT GROUP INC.",
        "CITGO PETROLEUM CORPORATION",
        "CITI",
        "CITIZENS BANK OF NEW HAMPSHIRE",
        "CITIZENS MEMORIAL HOSPITAL",
        "CITY OF AURORA",
        "CITY OF AUSTIN TEXAS",
        "CITY OF GRAPEVINE",
        "CITY OF HOPE",
        "CITY OF MANTECA",
        "CITY OF NAPERVILLE",
        "CITY OF NORTH LAS VEGAS",
        "CITY OF PLANTATION",
        "CITY OF TEMPE",
        "CITY OF UNIVERSITY CITY",
        "CIVIL SERVICE EMPLOYEES ASSOCIATION",
        "CJ MOYNA & SONS",
        "CKE RESTAURANTS",
        "CLARCOR CORPORATION",
        "CLARK ATLANTA UNIVERSITY",
        "CLAXTON-HEPBURN MEDICAL CENTER",
        "CLEARWIRE CORPORATION",
        "CLEVELAND CLINIC FOUNDATION",
        "CLEVELAND COUNTY SCHOOLS",
        "CLEVELAND REGIONAL MEDICAL CENTER",
        "CLIFFS NATURAL RESOURCES INC.",
        "CLOSED ACCOUNT ADDITIONAL LINES",
        "CLOSED ACCOUNT SPIN OFFS",
        "CLOSED ACCOUNT STATE TO STATE TRANS",
        "CLOW STAMPING COMPANY",
        "CLUBCORP INC",
        "CMWA",
        "COASTAL FEDERAL CREDIT UNION",
        "COBHAM DEFENSE ELECTRONIC SYSTEMS",
        "COEUR D' ALENE MINES CORPORATION",
        "COGNIZANT TECHNOLOGY SOLUTIONS",
        "COHERENT, INC.",
        "COLDWATER CREEK",
        "COLE HAAN",
        "COLINX LLC",
        "COLLECTION COMPANY OF AMERICA",
        "COLLEGE OF NEW ROCHELLE",
        "COLLEGE OF ST. BENEDICT",
        "COLLIN COUNTY COMMUNITY COLLEGE",
        "COLONIAL PIPELINE COMPANY",
        "COLORADO COLLEGE",
        "COLORADO HEALTH AND HOSPITAL ASCN",
        "COLUMBUS REGIONAL HEALTHCARE SYSTEM",
        "COMCAST",
        "COMCAST SPECTACOR",
        "COMERICA, INC.",
        "COMMISSIONED OFFICERS ASSOCIATION O",
        "COMMONWEALTH OF PENNSYLVANIA AUTO&H",
        "COMMONWEALTH OF VIRGINIA",
        "COMMONWEALTH PURCHASING GROUP LLC",
        "COMMUNITY CARE PHYSICIANS",
        "COMMUNITY COLLEGE OF RI ALUMNI",
        "COMMUNITY HEALTH NETWORK",
        "COMMUNITY HIGH SCHOOL DISTRICT 218",
        "COMMUNITY NEWSPAPER COMPANY",
        "COMPASS BANK",
        "COMPASS GROUP",
        "COMPASS MINERALS GROUP",
        "COMPUCOM SYSTEMS, INC.",
        "COMPUTER AID INC",
        "COMPUTERSHARE INVESTOR SERVICES",
        "COMPUWARE CORPORATION",
        "COMVERSE INC.",
        "CON EDISON",
        "CON EDISON ENERGY",
        "CONAGRA FOODS, INC.",
        "CONAIR CORPORATION",
        "CONCERTO SOFTWARE",
        "CONCORD HOSPITALITY, INC.",
        "CONE HEALTH",
        "CONFORMIS INC",
        "CONN. STATE UNIV PROFESSORS",
        "CONSERVATIVE50 PLUS",
        "CONSOL ENERGY",
        "CONSOLIDATED CONTAINER COMPANY LLC",
        "CONTINENTAL AG",
        "CONTINENTAL AIRLINES, INC.",
        "CONTINENTAL GROUP",
        "CONTINENTAL HEALTHCARE SYSTEMS INC.",
        "CONTINENTAL MATERIALS GROUP DEL",
        "CONTINUUM HEALTH ALLIANCE, LLC",
        "CONVATEC",
        "CONVERGYS",
        "COOSA VALLEY MEDICAL CENTER",
        "COPMEA",
        "CORBIN RUSSWIN, INC.",
        "CORELOGIC INC",
        "CORINTHIAN COLLEGES, INC",
        "CORNELL MEDICAL CENTER",
        "CORNELL UNIVERSITY 78",
        "CORNING GILBERT, INC.",
        "CORPORATE EXECUTIVE BOARD",
        "CORRECT CARE SOLUTIONS LLC",
        "CORVEL CORPORATION",
        "COTT BEVERAGES USA",
        "COUNTY OF MENDOCINO",
        "COVAD COMMUNICATIONS",
        "COVIDIEN",
        "CPS SECURITY",
        "CREDIT CONTROL SERVICES",
        "CREDIT SUISSE USA, INC.",
        "CREE, INC.",
        "CRESCENT REAL ESTATE EQUITIES",
        "CRICKET COMMUNICATIONS, INC",
        "CRITTENDEN MEMORIAL HOSPITAL",
        "CRODA, INC.",
        "CROUSE HOSPITAL",
        "CROWLEY MARITIME CORPORATION",
        "CRUMP INSURANCE",
        "CSC APPLIED TECHNOLOGIES",
        "CSEA SEIU LOCAL 2001760",
        "CSL BEHRING",
        "CSX CORPORATION",
        "CTI",
        "CUBA MEMORIAL HOSPITAL",
        "CULLMAN REGIONAL MEDICAL CENTER",
        "CUMBERLAND COUNTY SCHOOLS",
        "CURTISS-WRIGHT CORPORATION",
        "CUSHMAN & WAKEFIELD",
        "CUTTER & BUCK",
        "CV INDUSTRIES",
        "CVS- PART TIME EMPLOYEES",
        "CYBEX INTERNATIONAL",
        "CYCLING SPORTS GROUP",
        "CYMER, INC.",
        "CYPRESS HEALTH GROUP",
        "D & S CONSULTANTS, INC.",
        "D&S CONSULTANTS, INC.",
        "DAIICHI SANKYO, INC.",
        "DAIMLER TRUCKS OF NORTH AMERICA",
        "DAK AMERICAS LLC",
        "DALTON SCHOOLS",
        "DANA-FARBER CANCER INSTITUTE",
        "DANAHER CORPORATION",
        "DANIEL J. EDELMAN, INC.",
        "DARDEN RESTAURANTS INC.",
        "DARTMOUTH PRINTING",
        "DATACARD CORPORATION",
        "DATALOGIC SCANNING, INC",
        "DATAMATICS CONSULTANTS, INC.",
        "DATCU CREDIT UNION",
        "DAVID EVANS & ASSOCIATES",
        "DAVID'S BRIDAL",
        "DAVITA, INC.",
        "DAVOL, INC.",
        "DAWN FOOD PRODUCTS",
        "DAYTON CHILDREN'S",
        "DAYTON FREIGHT LINES",
        "DECATUR MEMORIAL HOSPITAL",
        "DEER VALLEY SCHOOL DISTRICT",
        "DEFFENBAUGH INDUSTRIES INC.",
        "DEKALB MEDICAL CENTER",
        "DELAGE LANDEN FINANCIAL SERV., INC.",
        "DELAWARE PARK MANAGEMENT COMPANY",
        "DELAWARE RIVER & BAY AUTHORITY",
        "DELAWARE VALLEY HOSPITAL",
        "DELHAIZE AMERICA, LLC",
        "DELL",
        "DELTA AIRLINES",
        "DELUXE CORPORATION",
        "DENDREON CORPORATION",
        "DENTSPLY",
        "DENVER HEALTH & HOSPITAL",
        "DENVER PUBLIC SCHOOLS",
        "DENVER WHOLESALE FLORIST",
        "DEPAUL UNIVERSITY",
        "DEPENDABLE HIGHWAY EXPRESS",
        "DEPUTY SHERIFFS ASSOC OF SAN DIEGO",
        "DESA HEATING, LLC",
        "DESERET MUTUAL BENEFIT ADMIN",
        "DESERET MUTUAL BENEFIT ADMIN",
        "DESERET MUTUAL BENEFIT ADMIN",
        "DESERET MUTUAL BENEFIT ADMIN",
        "DESERET MUTUAL BENEFIT ADMIN",
        "DESERET MUTUAL BENEFIT ADMIN",
        "DESERET MUTUAL BENEFIT ADMIN",
        "DESERET MUTUAL BENEFIT ADMIN",
        "DESERET MUTUAL BENEFIT ADMIN",
        "DESERET MUTUAL BENEFIT ADMIN",
        "DESERET MUTUAL BENEFIT ADMIN",
        "DESERET MUTUAL BENEFIT ADMIN",
        "DESERET MUTUAL BENEFIT ADMIN",
        "DESERET MUTUAL BENEFIT ADMIN",
        "DESERET MUTUAL BENEFIT ADMIN",
        "DEUTSCH INC.",
        "DEVRY INC.",
        "DEX ONE CORPORATION",
        "DIAGEO NORTH AMERICA",
        "DIALOGIC INC",
        "DICK CORPORATION",
        "DICKINSON COLLEGE",
        "DIGITAL RIVER",
        "DIGNITY HEALTH",
        "DIMENSION DATA",
        "DIOCESE OF BUFFALO",
        "DIOCESE OF METUCHEN",
        "DISCOVER FINANCIAL SERVICES INC",
        "DISCOVERY COMMUNICATIONS, LLC.",
        "DISH NETWORK",
        "DISNEY",
        "DISTRICT COUNCIL 21",
        "DISTRICT COUNCIL 37",
        "DIVERSIFIED HUMAN RESOURCES",
        "DIXON TICONDEROGA",
        "DJO, LLC",
        "DMN MANAGEMENT",
        "DOCTORS HOSPITAL OF SARASOTA",
        "DOLCE INTERNATIONAL HOLDINGS",
        "DOLE FOOD COMPANY, INC.",
        "DOLEX DOLLAR EXPRESS, INC",
        "DOMINION RESOURCES, INC.",
        "DORMAN PRODUCTS,INC",
        "DOUGLAS AUTOTECH CORP.",
        "DOUGLAS MACHINE",
        "DOWLING COLLEGE",
        "DPR CONSTRUCTION",
        "DPR REALTY",
        "DRAPER LABS",
        "DREW MEMORIAL HOSPITAL",
        "DRIL-QUIP, INC.",
        "DRISCOLL CHILDRENS HOSPITAL",
        "DSM NUTRITIONAL PRODUCTS",
        "DST SYSTEMS, INC.",
        "DTE ENERGY",
        "DUCKS UNLIMITED",
        "DUFF & PHELPS",
        "DUKE REALTY CORP.",
        "DUKE UNIVERSITY",
        "DUN & BRADSTREET",
        "DUNN EDWARDS CORP",
        "DUPONT .",
        "DURHAM TECHNICAL COMMUNITY COLLEGE",
        "DYNAMICS RESEARCH CORP",
        "DYNCORP",
        "EARTH COLOR GROUP",
        "EAST ALABAMA MEDICAL CENTER",
        "EAST KENTUCKY POWER COOPERATIVE",
        "EASTERN NEW MEXICO UNIVERSITY",
        "EATON VANCE",
        "ECCO USA, INC.",
        "ECFMG",
        "ECHO SPHERE CORPORATION",
        "ECOLAB",
        "ECONOMIST NEWSPAPER GROUP INC.",
        "EDDIE BAUER LLC",
        "EDGECOMBE COMMUNITY COLLEGE",
        "EECU CREDIT UNION",
        "EFI",
        "EISAI CORPORATION OF NORTH AMERICA",
        "EISNER LLP",
        "ELBIT SYSTEMS OF AMERICA INC.",
        "ELCOM INTERNATIONAL",
        "ELECTROLUX",
        "EA",
        "ELECTRONIC ARTS",
        "ELKAY MANUFACTURING",
        "ELKHART GENERAL HOSPITAL",
        "ELKS",
        "ELMHURST MEMORIAL HOSPITAL",
        "ELWYN INC",
        "EMC CORPORATION",
        "EMD MILLIPORE CORPORATION",
        "EMERGENCY CONSULTANTS",
        "EMERGENCY MEDICINE PHYSICIANS",
        "EMERGENCY NURSES ASSOCIATION",
        "EMERITUS CORPORATION",
        "EMERSON ELECTRIC CO.",
        "EMERSON SWAN, INC.",
        "EMMIS COMMUNICATIONS",
        "EMORY HEALTHCARE",
        "EMORY UNIVERSITY",
        "EMPIRE VISION CENTER INC",
        "EMPIRIAN PROPERTY MANAGEMENT",
        "EMPIRIX",
        "EMPLOYEE ASSOCIATION VA LOMA LINDA",
        "EMPLOYEE PROFESSIONALS",
        "ENCANA OIL & GAS (USA) INC.",
        "ENERCON SERVICES, INC.",
        "ENERGIZER HOLDINGS, INC.",
        "ENGILITY",
        "ENGLEWOOD HOSPITAL & MEDICAL CENTER",
        "ENHERENT",
        "ENOVAPREMIER, LLC",
        "ENSCO, INC.",
        "ENSIGN SERVICES, INC.",
        "ENSIGN-BICKFORD INDUSTRIES",
        "ENTERGY SERVICES INC.",
        "ENTERTAINMENT CONSUMER ASSOCIATION",
        "ENVISION HEALTHCARE CORPORATION",
        "EPHRAIM MCDOWELL REGIONAL MED CTR",
        "EQUINOX PAYMENTS",
        "EQUITY RESIDENTIAL SERVICES, L.L.C.",
        "ERICKSON LIVING MANAGEMENT LLC",
        "ESCO CORPORATION",
        "ESSEX GROUP MANAGEMENT",
        "ETHAN ALLEN",
        "EURAMAX",
        "EVERBRITE, LLC",
        "EVOLVING SYSTEMS, INC.",
        "EVONIK DEGUSSA CORPORATION",
        "EXELIS, INC.",
        "EXELIXIS INC",
        "EXELON CORPORATION",
        "EXETER HEALTH RESOURCES",
        "EXIDE TECHNOLOGIES",
        "EXPERIAN INFORMATION SOLUTIONS, INC",
        "EXPRESS MESSENGER",
        "EXPRESS SCRIPTS",
        "EXTENDICARE HEALTH SERVICES, INC.",
        "EXTENSIS",
        "EXTREME NETWORKS",
        "F&P AMERICA MFG., INC",
        "F & P AMERICA MFG., INC",
        "FABICK CAT",
        "FACTSET RESEARCH SYSTEMS",
        "FAIR ISAAC CORPORATION",
        "FAIR- RITE PRODUCTS CORPORATION",
        "FAIRFIELD MEDICAL CENTER",
        "FAIRFIELD UNIVERSITY",
        "FAIRPOINT COMMUNICATIONS",
        "FARGO ASSEMBLY OF PA",
        "FARMERS NATIONAL COMPANY",
        "FASTENAL COMPANY",
        "FAYETTEVILLE TECHNICAL COMM COLLEGE",
        "FAZOLI'S RESTAURANTS LLC",
        "FCCI INSURANCE",
        "FCI USA, LLC",
        "FEDERAL EXPRESS CORPORATION",
        "FEDERAL FIRST",
        "FEDERAL MOGUL",
        "FEDERAL RESERVE BANK",
        "FEDERAL SIGNAL CORPORATION",
        "FEDEX CUSTOM CRITICAL",
        "FEDEX FREIGHT",
        "FEDEX GROUND",
        "FEDEX OFFICE",
        "FEDEX SUPPLY CHAIN SYSTEMS, INC.",
        "FENNER DUNLOP",
        "FFMC/FDC",
        "FIDELITY INVESTMENTS",
        "FIDELITY TECHNOLOGIES CORPORATION",
        "FIFTH THIRD BANK",
        "FINANCIAL PLANNING ASSOCIATION",
        "FIRST ALERT PROFESSIONAL SECURITY",
        "FIRST AMERICAN CORPORATION",
        "FIRST CITIZENS BANK & TRUST COMPANY",
        "FIRST COMMONWEALTH FINANCIAL CORP",
        "FIRST COMMUNITY BANK",
        "FIRST DATA INVESTOR SERVICES",
        "FIRST ENERGY",
        "FIRST MIDWEST BANK",
        "FIRST TECH FEDERAL CREDIT UNION",
        "FIRST TENNESSEE BANK",
        "FIRSTHEALTH OF THE CAROLINAS",
        "FIRSTMERIT CORPORATION",
        "FISERV",
        "FLEXTRONICS INTERNATIONAL USA",
        "FLORIDA BANKERS ASSOCIATION",
        "FLORIDA DEPARTMENT OF EDUCATION",
        "FLORIDA RETIRED EDUCATOR ASSOC",
        "FLSMIDTH INC",
        "FLUOR CORPORATION",
        "FMC TECHNOLOGIES",
        "FOCUS HR",
        "FOOT LOCKER INC.",
        "FORD MOTOR COMPANY 80",
        "FOREST LABS",
        "FORMOSA PLASTICS CORPORATION, USA",
        "FORRESTER RESEARCH, INC.",
        "FORSYTH COUNTY SCHOOLS",
        "FORT OSAGE SCHOOL DISTRICT",
        "FORTNEY & WEYGANDT",
        "FOX, INC",
        "FPM LP",
        "FRANCISCAN ALLIANCE",
        "FRANCISCAN SISTERS",
        "FRANKCRUM",
        "FRANKLIN TEMPLETON GROUP",
        "FRED A MORETON AND COMPANY",
        "FREEDOM COMMUNICATIONS",
        "FREEPORT HEALTH NETWORK",
        "FREEPORT MCMORAN",
        "FREESCALE SEMICONDUCTOR INC.",
        "FREMONT - RIDEOUT HEALTH GROUP",
        "FRESENIUS KABI USA, LLC",
        "FREUDENBERG-NOK",
        "FRONTIER COMMUNICATIONS",
        "FUJI PHOTO FILM USA, INC",
        "FUJITSU MGMT SVCS OF AMERICA",
        "FUNDAMENTAL AKA TRANS HEALTHCARE",
        "GAMBRO RENAL PRODUCTS",
        "GAMESTOP STORES",
        "GANDER MOUNTAIN",
        "GANNETT CO INC",
        "GARDNER DENVER",
        "GARMIN INTERNATIONAL",
        "GARTNER",
        "GATX CORPORATION",
        "GEBA",
        "GEMTRON",
        "GENENTECH, INC.",
        "GENERAL DYNAMICS",
        "GENERAL FEDERATION OF WOMENS CLUBS",
        "GENERAL MILLS",
        "GENERAL MOTORS",
        "GENERAL PUBLIC GPC",
        "GENERATION AMERICA, LLC",
        "GENEX SERVICES, INC.",
        "GENOMIC HEALTH INC.",
        "GENTIVA",
        "GENZYME CORPORATION",
        "GEORGE MASON UNIVERSITY",
        "GEORGETOWN UNIVERSITY",
        "GEORGIA REINSURANCE DIRECT BILL",
        "GEORGIA STATE UNIVERSITY",
        "GERSON LEHRMAN GROUP, INC",
        "GETTY IMAGES INC.",
        "GIRLING HEALTHCARE, INC.",
        "GIVAUDAN CORPORATION",
        "GLAXOSMITHKLINE",
        "GLOBAL AVIATION HOLDINGS, INC.",
        "GLOBAL BRASS AND COPPER",
        "GLOBAL CASH ACCESS",
        "GLOBAL IMAGING SYSTEMS, INC.",
        "GLOBAL KNOWLEDGE NETWORK",
        "GLOBAL PAYMENTS",
        "GLYNN COUNTY BOC",
        "GOLDEN LIVING",
        "GOLDENWEST FEDERAL CREDIT UNION",
        "GOOD SAMARITAN HOSPITAL MEDICAL CTR",
        "GOODMAN MANUFACTURING",
        "GOODWILL INDUSTRIES - SUNCOAST",
        "GOOGLE INC",
        "GRAEBEL COMPANIES",
        "GRAHAM PACKAGING COMPANY",
        "GRAND VIEW HOSPITAL",
        "GRANT THORNTON LLP",
        "GRANVILLE COUNTY SCHOOLS",
        "GRAYBAR ELECTRIC",
        "GREAT RIVER ENERGY",
        "GREATWIDE LOGISICS SERVICES INC",
        "GREEN BAY PACKAGING, INC.",
        "GREEN TREE SERVICING LLC",
        "GREENBRIER COMPANIES",
        "GREENWICH HOSPITAL",
        "GRIFFITH LABORATORIES",
        "GRIFOLS INC.",
        "GROUP HEALTH INCORPORATED",
        "GROUP M",
        "GROUP MANAGEMENT SERVICES",
        "GROUPE STAHL",
        "GROVE HILL MEDICAL CENTER",
        "GSE SYSTEMS",
        "GTECH CORPORATION",
        "GUARANTY BANK FSB",
        "GUIDELINE",
        "GULF COAST HEALTH CARE",
        "GUNDERSEN HEALTH SYSTEM",
        "GWINNETT COUNTY BOARD OF EDUCATION",
        "GZA GEO ENVIRONMENTAL TECHNOLOGIES",
        "H&M",
        "H&R BLOCK",
        "H. P. HOOD",
        "HP HOOD",
        "HACKENSACK UNIV. MEDICAL CTR",
        "HAIN CELESTIAL GROUP",
        "HALLIBURTON COMPANY",
        "HALLMARK CARDS INC.",
        "HALLMARK HEALTH SYSTEMS",
        "HAMBLEN COUNTY BOARD OF EDUCATION",
        "HAMPTON CITY SCHOOLS",
        "HANCOCK HOLDING CO.",
        "HANFORD RECREATION ASSOCIATION",
        "HANOVER DIRECT INC",
        "HAPAG LLOYD",
        "HARBOR ONE CREDIT UNION",
        "HARBORSTONE CREDIT UNION",
        "HARD ROCK CAFE INTERNATIONAL",
        "HARDING UNIVERSITY",
        "HARLEY-DAVIDSON, INC.",
        "HARPER HOSPITAL",
        "HARRIS CORPORATION",
        "HARRISON COUNTY BOARD OF EDUCATION",
        "HARVARD UNIVERSITY",
        "HARVEY INDUSTRIES",
        "HASBRO, INC.",
        "HAVAS",
        "HAVERTY FURNITURE",
        "HAWKER PACIFIC AEROSPACE",
        "HAWORTH, INC.",
        "HAYWOOD COMMUNITY COLLEGE",
        "HCA HEALTHCARE CORP.",
        "HCC INDUSTRIES",
        "HCL AMERICA, INC.",
        "HD SUPPLY",
        "HEADSTRONG",
        "HEALTH AND HOSPITAL CORPORATION",
        "HEALTH CARE SERVICE CORPORTATION",
        "HEALTH EAST",
        "HEALTH MANAGEMENT",
        "HEALTH NET, INC.",
        "HEALTH PARTNERS",
        "HEALTH PARTNERS CENTRAL MN CLINICS",
        "HEALTHCARE ASSOC. OF NY ST.",
        "HEALTHNOW NY",
        "HEALTHPLAN HOLDINGS INC.",
        "HEALTHSOUTH CORP",
        "HEALTHY TRUCKING ASSOCIATION OF AME",
        "HEARST CORPORATION",
        "HEARTHSIDE FOOD SOLUTIONS",
        "HEARTLAND EMPLOYMENT SERVICES",
        "HEINZ",
        "HENKEL OF AMERICA",
        "HENNESSY AUTOMOBILE COMPANIES",
        "HENRY SCHEIN, INC.",
        "HENRY WURST",
        "HENSLEY AND COMPANY",
        "HERMAN MILLER INC",
        "HERR FOODS INC",
        "HERSHEY COMPANY",
        "HERTZ",
        "HERZOG CONTRACTING",
        "HEWLETT-PACKARD, EDS",
        "HH SUMCO",
        "HHGREGG",
        "HIBU INC",
        "HICKMAN COUNTY",
        "HIGHLAND HOSPITAL",
        "HILLERICH & BRADSBY CO.",
        "HILLSBORO COMMUNITY MEDICAL CENTER",
        "HILLSBOROUGH COMMUNITY COLLEGE",
        "HILLSIDE CHILDREN'S CENTER",
        "HILTON WORLDWIDE",
        "HITACHI DATA SYSTEMS",
        "HITCHINER MFG. CO.",
        "HMC/CAH CONSOLIDATED, INC",
        "HMS HOLDING LTD/HENDRICK MOTORSPORT",
        "HNC SOFTWARE, INC.",
        "HOAG MEMORIAL HOSPITAL",
        "HOBART BROTHERS",
        "HOLLAND AMERICA LINE N.V.",
        "HOLLINGSWORTH AND VOSE",
        "HOLLISTER",
        "HOLY SPIRIT HEALTH SYSTEMS",
        "HONDA OF AMERICA MFG INC",
        "HONEYWELL",
        "HONEYWELL -RETIREE",
        "HOOD COLLEGE",
        "HOOTERS CASINO HOTEL",
        "HORIZON BC/BS OF NJ",
        "HORIZON LINES LLC",
        "HORIZON SOLUTIONS CORP.",
        "HOSPITAL FOR SPECIAL CARE",
        "HOUGHTON MIFFLIN",
        "HOV SERVICES",
        "HOWARD COUNTY HOSPITAL",
        "HOWARD HUGHES MEDICAL INSTITUTE",
        "HOWARD UNIVERSITY",
        "HRSOURCE, INC.",
        "HSBC NORTH AMERICA HOLDINGS, INC",
        "HUDSON VALLEY BANK",
        "HUMAN GENOME SCIENCES INC",
        "HUMAN KINETICS",
        "HUMANA",
        "HUMILITY OF MARY HEALTH PARTNERS",
        "HUNTER CONTRACTING",
        "HUNTER DOUGLAS",
        "HUNTERDON MEDICAL CENTER",
        "HUNTINGTON HOSPITAL",
        "HUNTON & WILLIAMS",
        "HURON CONSULTING GROUP",
        "HUSSMANN CORPORATION",
        "HYATT LEGAL PLANS",
        "I FLY AMERICA, INC.",
        "IBEW LOCAL 102",
        "IBM",
        "ICE GALLERY",
        "ICF CONSULTING GROUP",
        "IGATE CORPORATION",
        "IGNITE RESTAURANT GROUP",
        "IKON OFFICE SOLUTIONS",
        "ILLINOIS ASSOCIATION OF REALTORS",
        "ILLINOIS CENTRAL RAILROAD COMPANY",
        "IMATION CORP",
        "IMERYS CORPORATION",
        "IMS HEALTH INCORPORATED",
        "INDEPENDENCE AIR",
        "INDEPENDENT PILOTS ASSOCIATION",
        "INDIANA MEMBERS CREDIT UNION OF IND",
        "INDIANA RETIRED TEACHERS ASSOCIATIO",
        "INDIANA STATE EMPLOYEES ASSOCIATION",
        "INDIANA UNIVERSITY",
        "INDIANA UNIVERSITY HEALTH",
        "INFINITY INSURANCE COMPANY",
        "INFOCROSSING",
        "INFORMA USA",
        "INFORMATICA CORPORATION",
        "INFORMATION RESOURCES",
        "INFOSYS LIMITED",
        "ING FINANCIAL SERVICES CORPORATION",
        "INGALLS HEALTH SYSTEM",
        "INGERSOLL RAND",
        "INNOVIA FILMS INC.",
        "INOVA HEALTH SYSTEM SERVICES",
        "INSIGNIA RESIDENTIAL GRP/DOUGLAS EL",
        "IN-SINK-ERATOR DIVISION EMERSON E",
        "INST OF ELECTRICAL & ELECTRONIC ENG",
        "INSTITUTIONAL INVESTOR",
        "INSTRON",
        "INSURANCE TRUST",
        "INSURANCE TRUST FOR DELTA RETIREES",
        "INSURITY INC.",
        "INTEGRA LIFESCIENCES",
        "INTEGRATED DEVICE TECHNOLOGY, INC.",
        "INTEGRATED ELECTRICAL SERVICES INC.",
        "INTEGRATED MARKETING",
        "INTEGRITY APPLICATIONS INC",
        "INTEL CORPORATION",
        "INTELSAT GLOBAL SERVICES CORP",
        "INTERACTIVE DATA CORPORATION",
        "INTERGEN",
        "INTERGRAPH CORPORATION",
        "INTERMOUNTAIN GAS COMPANY",
        "INTERMOUNTAIN HEALTH CARE",
        "INTERNATIONAL ASSOC OF RETIRED FIRE",
        "INTERNATIONAL GAME TECHNOLOGY",
        "INTERNATIONAL PAPER",
        "INTERNATIONAL RECTIFIER",
        "INTERNATIONAL SEMATECH",
        "INTERPUBLIC GROUP COMPANIES INC.",
        "INTERSIL CORPORATION",
        "INT'L UNION OF OPERATING ENGINEERS",
        "INTRADO",
        "INTRAPAC, CORP.",
        "INTUIT, INC.",
        "INVENSYS SYSTEMS",
        "INX",
        "ION MEDIA NETWORKS, INC",
        "IONA COLLEGE",
        "IPA ASSOCATION OF AMERICA",
        "IRA DAVENPORT MEMORIAL HOSPITAL",
        "IRI, ISG, INC.",
        "IRIS GRAPHICS",
        "IRVINE COMPANY",
        "ISBA - RETIREES & BOARD MEMBERS",
        "ISO NEW ENGLAND",
        "ITRON, INC.",
        "ITT CORPORATION",
        "IVY TECH ALUMNI ASSOCIATION",
        "J CREW",
        "J.B. HUNT",
        "J.JILL GROUP",
        "J. JILL GROUP",
        "J JILL GROUP",
        "JACKSON GENERAL HOSPITAL",
        "JACOBS AEROSPACE TESTING ALLIANCE",
        "JACOBS ENGINEERING GROUP INC.",
        "JACOBS TECHNOLOGY GROUP INC.",
        "JACOBSEN CONSTRUCTION",
        "JAFRA COSMETICS INTERNATIONAL, INC.",
        "JAMES HARDIE BUILDING PRODUCTS",
        "JANE PHILIPS MEDICAL CENTER",
        "JANUS CAPITAL GROUP",
        "JARDEN CORPORATION",
        "JARDINE INSURANCE BROKERS",
        "JAZZ SEMICONDUCTOR",
        "JBT CORPORTION",
        "JEFFERIES GROUP LLC",
        "JEFFERSON CNTY PUBLIC SCHOOLS",
        "JEFFERSON COUNTY",
        "JEFFERSON WELLS INTERNATIONAL",
        "JETBLUE AIRWAYS",
        "JIM ELLIS",
        "JJ KELLER",
        "JM FAMILY",
        "JM MANUFACTURING COMPANY, INC",
        "JO-ANN STORES",
        "JOHN HANCOCK LIFE INSURANCE CO (USA)",
        "JOHN J KIRLIN INC",
        "JOHN MUIR HEALTH",
        "JOHN WILEY & SONS, INC.",
        "JOHN'S HOPKINS UNIVERSITY",
        "JOHNSON & JOHNSON",
        "JOHNSON AND WALES UNIVERSITY",
        "JOHNSON CONTROLS INC.",
        "JOHNSON CONTROLS, INC. - DB ONLY",
        "JOHNSTON COUNTY SCHOOLS",
        "JOHNSTON MEMORIAL HOSPITAL",
        "JOINT COMMISSION",
        "JOINT SCHOOL DISTRICT NO. 2",
        "JONES LANG LASALLE",
        "JORDAN VALLEY MEDICAL CENTER",
        "JORDANS FURNITURE",
        "JP MORGAN CHASE",
        "JUNIPER NETWORKS, INC.",
        "K. HOVNANIAN COMPANIES",
        "K HOVNANIAN COMPANIES",
        "KAISER PERMANENTE OF COLORADO",
        "KALEIDA HEALTH",
        "KANSAS CITY SOUTHERN",
        "KANSAS HOSPITAL ASSOC.",
        "KAO CORPORATION OF AMERICA",
        "KAPSTONE PAPER AND PACKAGING CORP",
        "KATUN CORPORATION",
        "KAYSER-ROTH CORPORATION",
        "KB HOME",
        "KCG, INC.",
        "KEENAN AND ASSOCIATES",
        "KELLOGG COMPANY",
        "KENNEY MANUFACTURING",
        "KENTON COUNTY BOARD OF EDUCATION",
        "KENTUCKYONE",
        "KESSLER REHABILITATION CORPORATION",
        "KETTERING HEALTH NETWORK",
        "KEY FAMILY OF COMPANIES",
        "KEYSTONE AUTOMOTIVE OPERATIONS",
        "KEYSTONE COLLEGE",
        "KGP TELECOMMUNICATIONS, INC",
        "KIA MOTORS MANUFACTURING GEORGIA",
        "KIK CUSTOM PRODUCTS",
        "KIMPTON HOTEL & RESTAURANT GROUP",
        "KIMSTAFFHR, INC.",
        "KINDRED HEALTHCARE, INC.",
        "KINECTA FEDERAL CREDIT UNION",
        "KINECTA FEDERAL CREDIT UNION",
        "KINGSTON HOSPITAL",
        "KITCHELL CORP.",
        "KLA-TENCOR",
        "KLEINFELDER",
        "KNAACK MANUFACTURING",
        "KNIGHT CAPITAL GROUP",
        "K OCH INDUSTRIES",
        "KOHL'S",
        "KOOTENAI MEDICAL CENTER",
        "KOPPERS INC.",
        "KPMG PEAT MARWICK",
        "KPSS INC.",
        "KRAFT FOOD GROUP, INC.",
        "KRATON POLYMERS",
        "KRONOS",
        "L OCCITANE INC.",
        "L'OCCITANE INC.",
        "L-3",
        "L3",
        "LABORATORY CORPORATION",
        "LABORERS INTERNATIONAL UNION OF NOR",
        "LAHEY CLINIC",
        "LAIRD, INC.",
        "LAKE COUNTY",
        "LAKE FOREST HOSPITAL",
        "LAKELAND REGIONAL HEALTH SYSTEMS",
        "LAM RESEARCH CORP",
        "LAMADELEINE",
        "LANDEAU METROPOLITAN",
        "LARSON-JUHL",
        "LAWRENCE LIVERMORE NATIONAL LABORAT",
        "LAWRENCE MEMORIAL HOSPITAL",
        "LAWRENCE REGIONAL HEALTH SYSTEM INC",
        "LAYNE CHRISTENSEN COMPANY",
        "LCC INTERNATIONAL",
        "LEACH & GARNER CO",
        "LEAKE AND WATTS",
        "LEAR CORPORATION",
        "LEE COUNTY",
        "LEE MEMORIAL",
        "LEGG MASON",
        "LEGGETT & PLATT INC",
        "LEHIGH HANSON",
        "LEHIGH VALLEY BUSINESS COALITION",
        "LEHMAN BROTHERS, INC.",
        "LEMOYNE COLLEGE",
        "LEND LEASE",
        "LENNAR CORPORATION",
        "LENOX HILL HOSPITAL",
        "LEO A DALY",
        "LEVEL 3 COMMUNICATIONS",
        "LEVI STRAUSS & CO.",
        "LEXMARK INTERNATIONAL, INC.",
        "LG ELECTRONICS",
        "LIBERTY MEDICAL",
        "LIFE TECHNOLOGIES CORPORATION",
        "LIFECARE MANAGEMENT SERVICES",
        "LIFECARE, INC",
        "LIFE'S WORC",
        "LIFESOUTH COMMUNITY BLOOD CENTERS",
        "LIFESPAN",
        "LIFETIME BRANDS, INC.",
        "LIFETIME HEALTH CARE COMPANIES",
        "LIFEWAY CHRISTIAN RESOURCES",
        "LIMITED BRANDS",
        "LINCOLN COUNTY BOARD OF EDUCATION",
        "LINCOLN INDUSTRIES",
        "LITTLER MENDELSON PC",
        "LITTLETON SCHOOL DISTRICT",
        "LIVINGSTON BOARD OF EDUCATION",
        "LL BEAN",
        "LOCKHEED MARTIN",
        "LOCKHEED MARTIN GLOBAL TELECOMM",
        "LODGENET",
        "LOGAN BUS COMPANY",
        "LOGITECH INC.",
        "LONG ISLAND HOME, LTD",
        "LONGVIEW FIBRE",
        "LORD CORPORATION",
        "LOREAL USA INC.",
        "LOTUSHR",
        "LOWE'S COMPANIES, INC.",
        "LOYOLA MARYMOUNT UNIVERSITY",
        "LSG SKY CHEFS",
        "LSI CORPORATION",
        "LUBBOCK INDEPENDENT SCHOOL DISTRICT",
        "LUCENT TECHNOLOGIES",
        "LUFTHANSA TECHNIK NORTH AMERICA",
        "LUFTHANSA USA",
        "LUTHERAN MEDICAL CENTER",
        "LVMH MOET HENNESSY LOUIS VUITTON, I",
        "LYONDELLBASSELL",
        "M&T BANK CORPORATION",
        "M.A. MORTENSON COMPANY",
        "MAC-GRAY CORPORATION",
        "MACK ENERGY CORPORATION",
        "MACY'S CREDIT AND CUSTOMER SERVICES",
        "MACY'S SYSTEMS AND TECHNOLOGY, INC.",
        "MADD",
        "MADISON COUNTY BOARD OF EDUCATION",
        "MAERSK LINE",
        "MAGELLAN HEALTH SERVICES",
        "MAGMA DESIGN AUTOMATION INC.",
        "MAGNA INTERNATIONAL",
        "MAINE MEDICAL ASSOCIATION",
        "MAINES PAPER AND FOOD SERVICE, INC",
        "MAJOR LEAGUE BASEBALL",
        "MALLINCKRODT GROUP",
        "MANAGEMENT AND TRAINING CORP",
        "MANNINGTON MILLS",
        "MANSFIELD INDEPENDENT SCHOOL DISTRI",
        "MANTECH INTERNATIONAL",
        "MARATHON OIL COMPANY",
        "MARATHON PETROLEUM OIL",
        "MARICOPA COUNTY",
        "MARICOPA INTEGRATED HEALTH SYSTEM",
        "MARINE BIOLOGICAL LABORATORY",
        "MARINEMAX, INC.",
        "MARION COUNTY",
        "MARQUETTE MEDICAL SYSTEMS",
        "MARQUETTE UNIVERSITY",
        "MARSH & MCLENNAN",
        "MARTIN COMMUNITY COLLEGE",
        "MARTIN MEMORIAL HEALTH SYSTEMS",
        "MARVELL SEMICONDUCTOR GROUP",
        "MARYWOOD UNIVERSITY",
        "MASSACHUSETTS CORRECTIONS OFFICERS",
        "MASSACHUSETTS HOSPITAL",
        "MASTERCARD WORLDWIDE",
        "MATERION CORPORATION",
        "MATHEMATICAL ASSOCIATION OF AMERICA",
        "MATRIX SERVICE COMPANY",
        "MAVERICK TRANSPORTATION USA",
        "MAXELL CORPORATION OF AMERICA",
        "MAXIMUS INC",
        "MAYER ELECTRIC SUPPLY SERVICING CO",
        "MB FINANCIAL INC.",
        "MCAFEE, INC",
        "MCDONALD'S CORPORATION",
        "MCDONALD'S LICENSEE",
        "MCDONALD'S OPERATING CORPORATE CREW",
        "MCGLADREY, LLP",
        "MCGRAW HILL EDUCATION",
        "MCGRAW-HILL, INC.",
        "MCKESSON",
        "MCKINSTRY CO.",
        "MDC PARTNERS",
        "MEADOW GOLD DAIRIES",
        "MEDIA GENERAL INC.",
        "MEDICA HEALTH PLANS",
        "MEDICAL CENTER OF PLANO",
        "MEDIMPACT",
        "MEDISYS HEALTH NETWORK, INC.",
        "MEDLINE INDUSTRIES, INC.",
        "MEDTRONIC, INC.",
        "MEHARRY MEDICAL COLLEGE",
        "MELALEUCA INC.",
        "MELROSE CREDIT UNION",
        "MEMBER INSURANCE",
        "MEMBERS",
        "MEMORIAL HERMANN BAPTIST BEAUMONT",
        "MEMORIAL HERMANN BAPTIST ORANGE HOS",
        "MEMORIAL HERMANN HEALTHCARE",
        "MERCEDES BENZ US INTERNATIONAL",
        "MERCEDES-BENZ USA, LLC",
        "MERCHANTS BANK",
        "MERCK & CO., INC.",
        "MERCURY SYSTEMS",
        "MERCY COLLEGE",
        "MERCY HEALTH",
        "MERCY MEDICAL CENTER, CEDAR RAPIDS",
        "MERCY MEMORIAL HOSPITAL SYSTEM",
        "MERCYHURST UNIVERSITY ALUMNI",
        "MERIAL",
        "MERIDIAN HEALTH SYSTEM",
        "MERIT RESOURCES INC.",
        "MERVYNS",
        "MESA AIR GROUP",
        "MESQUITE INDEPENDENT SCHOOL DISTRIC",
        "MET MORTGAGE",
        "METHODIST LE BONHEUR HEALTHCARE",
        "METLIFE CAPITAL CORPORATION",
        "METRO ONE TELECOMMUNICATIONS",
        "METROPOLITAN GOLF ASSOCIATION",
        "METROPOLITAN NASHVILLE AIRPORT AUTH",
        "METROPOLITAN TRANSIT AUTH",
        "METLIFE",
        "MFS",
        "MGM RESORTS INTERNATIONAL",
        "MHMR OF TARRANT COUNTY",
        "M-I LLC",
        "MICHAEL FOODS, INC.",
        "MICHIGAN STATE UNIVERSITY",
        "MICRO ELECTRONICS INC",
        "MICROCHIP TECHNOLOGY",
        "MICRON TECHNOLOGY, INC.",
        "MICROSOFT",
        "MICROSOFT ALUMNI NETWORK",
        "MIDDLESEX COUNTY COLLEGE",
        "MILLENNIUM LABORATORIES",
        "MILLERCOORS",
        "MINACS GROUP",
        "MINERALS TECHNOLOGIES INC.",
        "MINISTRY EAST REGION",
        "MINISTRY HEALTH CARE, INC",
        "MINNESOTA BENEFIT ASSOCIATION",
        "MINNESOTA MEDICAL ASSOCIATION",
        "MIT",
        "MITCHELL DISTRIBUTING",
        "MITRE CORPORATION",
        "MITSUBISHI POLYESTER FILM",
        "MIZUHO CORPORATE BANK",
        "MIZUNO USA INC",
        "MMODAL",
        "MODERN BUSINESS ASSOC.",
        "MOEN INCORPORATED",
        "MOHAWK INDUSTRIES",
        "MOLEX INC.",
        "MOMENTIVE",
        "MONDELEZ INTERNATIONAL, LLC",
        "MONEYGRAM INTERNATIONAL, INC.",
        "MONITRONICS INTERNATIONAL, INC.",
        "MONROE SCHOOL BOARD OF EDUCATION",
        "MONSANTO COMPANY",
        "MONTEFIORE MEDICAL CENTER",
        "MOODY'S CORPORATION",
        "MOOSE INTERNATIONAL INC",
        "MORGAN STANLEY",
        "MOTOROLA ISG",
        "MOTOROLA MOBILITY",
        "MOUNT AUBURN",
        "MOUNTAIN AMERICA CREDIT UNION",
        "MOVADO GROUP",
        "MOVIUS INTERACTIVE CORPORATION",
        "MRV COMMUNICATIONS, INC",
        "MT. BAKER SCHOOL DISTRICT",
        "MULTILINK",
        "MUNGER, TOLLES & OLSON",
        "MUNICH RE AMERICA",
        "MUSCULOSKELETAL TRANSPLANT FNDTN",
        "MUSEUM OF MODERN ART",
        "MV TRANSPORTATION",
        "MVP HEALTH PLAN",
        "MYR GROUP",
        "MYRIAD GENETICS, INC.",
        "N & M TRANSFER COMPANY, INC.",
        "N&M TRANSFER COMPANY, INC.",
        "N F A, INC.",
        "NFA, INC.",
        "NAACP",
        "NACCO MATERIALS HANDLING GROUP, INC",
        "NALCO",
        "NAMMO TALLEY, INC.",
        "NASA",
        "NATIONAL AMUSEMENTS INC.",
        "NATIONAL AQUARIUM",
        "NATIONAL ASSOCIATION OF CONSERVATIV",
        "NATIONAL ASSOCIATION OF POSTAL SUPV",
        "NATIONAL COALITION OF PUBLIC SAFETY",
        "NATIONAL COOPERATIVE BANK",
        "NATIONAL CORVETTE OWNERS ASSOCIATIO",
        "NATIONAL ELECTRONICS WARRANTY LLC",
        "NATIONAL ENVELOPE CORPORATION",
        "NATIONAL EXCHANGE CLUB",
        "NATIONAL GEOGRAPHIC SOCIETY",
        "NATIONAL GRID",
        "NATIONAL HEALTH MANAGEMENT",
        "NATIONAL HIGH SCHOOL COACHES ASSOCI",
        "NATIONAL LOUIS UNIVERSITY",
        "NATIONAL MULTIPLE SCLEROSIS SOCIETY",
        "NATIONAL OILWELL VARCO",
        "NATIONAL PEO, LLC.",
        "NATIONAL PTA",
        "NATIONAL RIFLE ASSOC OF AMERICA",
        "NATIONAL TELECOMMUNICATIONS COOPERA",
        "NATIONWIDE VISION CENTER, PC",
        "NATL MULTIPLE SCLEROSIS SOC",
        "NATL TRUST FOR HISTORIC PRESERVATIO",
        "NATL. ASSOC. FOR THE SELF EMPLOYED",
        "NATURE'S WAY PRODUCTS, INC.",
        "NAVARRO DISCOUNT PHARMACIES",
        "NAVIGANT CONSULTING",
        "NAVISTAR INTERNATIONAL CORP.",
        "NAVTEQ",
        "NAVY FEDERAL CREDIT UNION",
        "NBC UNIVERSAL",
        "NCR",
        "NEC DISPLAY SOLUTIONS OF AMERICA",
        "NEC SOLUTIONS AMERICA INC",
        "NEC TECHNOLOGIES",
        "NEGWER MATERIALS",
        "NEMAK USA, INC",
        "NESTLE USA INC.",
        "NETAPP, INC",
        "NETCENTRICS CORPORATION",
        "NETJETS, INC.",
        "NETWORK COMMUNICATIONS, INC.",
        "NEUBERGER BERMAN GROUP LLC",
        "NEVADA HOTEL AND LODGING ASSOCIATIO",
        "NEW ALBERTSON'S",
        "NEW BALANCE",
        "NEW ENGLAND FEDERAL CREDIT UNION",
        "NEW FLYER OF AMERICA, INC.",
        "NEW FREEDOM MORTGAGE CORPORATION",
        "NEW HORIZON ACADEMY",
        "NEW JERSEY MAP",
        "NEW MEXICO FEDERATION OF TEACHERS",
        "NEW MEXICO HIGHLANDS UNIVERSITY",
        "NEW YORK METHODIST HOSPITAL",
        "NEW YORK STATE UNITED TEACHERS",
        "NEW YORK TIMES",
        "NEW YORK UNIVERSITY",
        "NEWBERG PUBLIC SCHOOLS",
        "NEWELL COMPANY",
        "NEWMARKET INTERNATIONAL",
        "NEWPAGE CORPORATION",
        "NEWPORT HOSPITAL",
        "NEWPORT MESA UNIFIED SCHOOL DIST.",
        "NEWS CORPORATION",
        "NEXEO SOLUTIONS, LLC",
        "NEXTERA ENERGY, INC.",
        "NICE SYSTEMS, INC.",
        "NICHOLAS H. NOYES MEMORIAL HOSPITAL",
        "NIKE, INC.",
        "NIKON, INC.",
        "NIPPON EXPRESS USA",
        "NISSAN NORTH AMERICA, INC.",
        "NIVIDIA",
        "NOKIA",
        "NORDSTROM INC",
        "NORTH CAROLINA STATE FIREMANS ASSOC",
        "NORTH JERSEY FEDERAL CREDIT UNION",
        "NORTHEAST BEHAVIORAL HEALTH",
        "NORTHEAST CENTER FOR SPECIAL CARE",
        "NORTHEAST COMMUNITY CREDIT UNION",
        "NORTHEAST REHABILITATION HOSPITAL",
        "NORTHEAST UTILITIES",
        "NORTHEASTERN UNIVERSITY",
        "NORTHERN TIER ENERGY",
        "NORTHERN VIRGINIA FAMILY SERVICE",
        "NORTHROP GRUMMAN",
        "NORTHWEST COMMUNITY HOSPITAL",
        "NORTHWEST TRAILER PARTS",
        "NORTON HEALTHCARE",
        "NOVANT HEALTH",
        "NOVARTIS CORPORATION",
        "NOVELL, INC.",
        "NOVO NORDISK INC.",
        "NSTAR",
        "NTN USA CORPORATION",
        "NTT DATA INC.",
        "NTT DATA, INC.",
        "NU SKIN",
        "NU-KOTE INTERNATIONAL",
        "NURSES FOUNDATION OF WISCONSIN",
        "NUTMEG STATE FEDERAL CREDIT UNION",
        "NV ENERGY",
        "NW FINANCIAL ASSOC.EE BENEFIT TRUST",
        "NY CONVENTION CENTER OPERATING CORP",
        "NYE COUNTY",
        "NYK LINE INC.",
        "NYPRO",
        "NYSARC, INC.",
        "NYSCOPBA",
        "NYSE EURONEXT",
        "O.C. TANNER COMPANY",
        "OC TANNER COMPANY",
        "OCCIDENTAL PETROLEUM CORPORATION",
        "OCEAN SPRAY CRANBERRIES",
        "OFFICE DEPOT",
        "OFFICE MAX INC.",
        "OFS FITEL, LLC",
        "OGILVY & MATHER",
        "OHIO DENTAL ASSOCIATION",
        "OHIO OSTEOPATHIC ASSOCIATION",
        "OHIOHEALTH",
        "OKLAHOMA HEART HOSPITAL",
        "OKLAHOMA PUBLIC EMPLOYEES ASSOC.",
        "OLD MUTUAL (US) HOLDINGS INC",
        "OLDCASTLE INC.",
        "OLIN CORPORATION",
        "OLMSTED FALLS BOARD OF EDUCATION",
        "O'MELVENY & MYERS LLP",
        "OMELVENY & MYERS LLP",
        "OMNI CIRCUITS, INC.",
        "ON SEMICONDUCTOR CORPORATION",
        "O'NEAL STEEL INC",
        "ONEAL STEEL INC",
        "ONEAMERICA",
        "ONYX SOFTWARE",
        "OPEIU LOCAL 100",
        "OPTUM, INC.",
        "ORANGE BUSINESS SERVICES HOLDINGS",
        "ORANGE COAST TITLE COMPANY",
        "ORANGE COUNTY'S CREDIT UNION",
        "ORANGE REGIONAL MEDICAL CENTER",
        "ORCHARD SUPPLY HARDWARE COPRORATION",
        "ORDER SONS OF ITALY IN AMERICA",
        "OREGON GOLF ASSOCIATION",
        "ORTHOLINK PHYSICIANS CORPORATION",
        "OSF SAINT ELIZABETH MEDICAL CENTER",
        "OSMA",
        "OSRAM SYLVANIA",
        "OTTO BOCK HEALTHCARE, LP",
        "OUR LADY OF CONSOLATION",
        "OUR365",
        "OVERHEAD DOOR CORPORATION",
        "OVERLAKE HOSPITAL",
        "OWENS & MINOR",
        "OWENS CORNING",
        "OZBURN-HESSEY LOGISTICS",
        "OZINGA BROS., INC.",
        "P.F. CHANG'S CHINA BISTRO, INC.",
        "PF CHANG'S CHINA BISTRO, INC.",
        "PA CONSULTING GROUP",
        "PACE",
        "PACE RESOURCES, INC.",
        "PACIFIC ARCHITECTS AND ENGINEERS",
        "PACIFIC DENTAL SERVICES, INC",
        "PACIFICORP",
        "PALM ONE",
        "PALMDALE SCHOOL DISTRICT",
        "PALOMAR HEALTH",
        "PANASONIC CORP OF NORTH AMERICA",
        "PAREXEL INTERNATIONAL CORPORATION",
        "PARK NICOLLET",
        "PARKHILL SCHOOL DISTRICT",
        "PARKVIEW HEALTH",
        "PARLEX USA, INC.",
        "PARSONS CORPORATION",
        "PARTMINER, INC",
        "PATHFINDER INC",
        "PATHOLOGY ASSOCIATES MEDICAL LABORA",
        "PAUL HASTINGS LLP",
        "PAWLING CORPORATION",
        "PAYCHEX, INC.",
        "PBC",
        "PBF HOLDING COMPANY LLC",
        "PC CONNECTION, INC.",
        "PC MALL",
        "PECHANGA DEVELOPMENT CORPORATION",
        "PECHINEY",
        "PEGASUS SOLUTIONS",
        "PEIRCE-PHELPS",
        "PENINSULA HOSPITAL CENTER",
        "PENNSYLVANIA PROFESSIONAL FIREFIGHT",
        "PEOPLES ENERGY CORPORATION",
        "PEORIA UNIFIED SCHOOL DISTRICT",
        "PEP BOYS MANNY MOE & JACK",
        "PEPCO HOLDINGS INC.",
        "PEPSICO",
        "PERKINELMER",
        "PERNOD RICARD",
        "PETCO ANIMAL SUPPLIES, INC.",
        "PETSMART",
        "PFIZER",
        "PHELPS COUNTY REGIONAL MEDICAL CENT",
        "PHH CORP",
        "PHILADELPHIA INSURANCE COMPANIES",
        "PHILIP MORRIS",
        "PHILIPS ELECTRONICS",
        "PHILLIPS EXETER ACADEMY",
        "PHOENIX CHILDREN'S ACADEMY",
        "PIKEVILLE COLLEGE",
        "PINELLAS COUNTY SCHOOLS",
        "PINNACLE AIRLINES INC.",
        "PINNACLE FOODS GROUP, LLC",
        "PINNACLE WEST CAPITAL CORPORATION",
        "PIONEER VALLEY HOSPITAL",
        "PITNEY BOWES, INC.",
        "PITT COMMUNITY COLLEGE",
        "PITT COMMUNITY COLLEGE ALUMNI ASSOC",
        "PLATINUM EQUITY HOLDINGS",
        "PLEXUS",
        "PMC GROUP, INC.",
        "PMSI",
        "PNC",
        "POET LLC",
        "POLYCOM, INC.",
        "PORTER NOVELLI",
        "PORTLAND COMMUNITY COLLEGE",
        "PORTLAND GENERAL ELECTRIC",
        "PORTS AMERICA",
        "POWELL INDUSTRIES",
        "PPG INDUSTRIES, INC.",
        "PQ CORPORATION",
        "PR NEWSWIRE",
        "PRAXAIR INC",
        "PRECIOUS PLATES",
        "PRECISION ENGINEERED PRODUCTS",
        "PREMIER HOME HEALTH CARE",
        "PREMIER MEMBERS FEDERAL CREDIT UNIO",
        "PREMIER RESEARCH",
        "PRESS GANEY ASSOCIATES",
        "PRESTIGE EMPLOYEE ADMINISTRATORS",
        "PRICE CHOPPER",
        "PRICEWATERHOUSECOOPERS",
        "PRIDE MOBILITY PRODUCTS CORP.",
        "PRIME HEALTHCARE SERVICES",
        "PRIME TANNING CO., INC.",
        "PRIME THERAPEUTICS",
        "PRIMERICA FINANCIAL SERVICES, INC",
        "PRIMESOURCE BUILDING PRODUCTS",
        "PROGRESS SOFTWARE",
        "PROGRESSIVE INSURANCE",
        "PROGRESSIVE NURSING STAFFERS",
        "PROHEALTH CARE,INC",
        "PRO-LIFT EQUIPMENT",
        "PROTECTION ONE",
        "PROVENA HEALTH",
        "PROVIDENCE HEALTH & SERVICES",
        "PROVIDENCE HOSPITALS",
        "PSAV PRESENTATION SERVICES",
        "PSE & G",
        "PSEA",
        "PSS WORLD, INC.",
        "PTC",
        "PUBLIC EMPLOYEES FEDERATION",
        "PUBLIC STORAGE",
        "PUBLICIS GROUPE",
        "PUBLISHERS CLEARING HOUSE",
        "PULASKI COUNTY SPECIAL SCHOOL DIST",
        "PUMA NORTH AMERICA",
        "PURDUE UNIVERSITY",
        "PUTNAM INVESTMENTS",
        "PVH CORP.",
        "QEP RESOURCES, INC.",
        "QIAGEN SCIENCES, INC.",
        "QUAD GRAPHICS",
        "QUALITY SYSTEMS, INC",
        "QUANTUM CORPORATION",
        "QUEST DIAGNOSTICS",
        "QUESTAR CORPORATION",
        "QUESTCO, INC.",
        "QUICKEN LOANS",
        "QUICKWAY CARRIERS",
        "QUINTILES TRANSNATIONAL CORPORATION",
        "R.I.T",
        "RIT",
        "RABOBANK INTERNATIONAL",
        "RADISYS CORPORATION",
        "RANCHO SANTIAGO COMMUNITY COLLEGE",
        "RANDOLPH COUNTY BOARD OF EDUCATION",
        "RANDSTAD PROFESSIONALS US, LP",
        "RARITAN BAY MEDICAL CENTER",
        "RAYTHEON",
        "RBC USA HOLDCO CORPORATION",
        "RBS CITIZENS, NA",
        "RCM TECHNOLOGIES",
        "RCN CORPORATION",
        "REA MAGNET WIRE COMPANY INC.",
        "REA MAGNET WIRE COMPANY INC.",
        "READER'S DIGEST",
        "REAL ESTATE ADVISOR DEFENSE, INC.",
        "RECALL-AMERICAS",
        "RECEIVABLE MANAGEMENT SERVICES CORP",
        "RECKITT BENCKISER",
        "RECORDING FOR THE BLIND & DYSLEXIC",
        "RED BULL NORTH AMERICA, INC.",
        "RED HAT, INC.",
        "REDBACK NETWORKS",
        "REDDY ICE",
        "REED ELSEVIER",
        "REEDY CREEK IMPROVEMENT DISTRICT",
        "REGENERON PHARMACEUTICALS",
        "REGIONAL MANAGEMENT CORP",
        "REICHHOLD",
        "RELIANT MEDICAL GROUP",
        "REMEC DEFENSE AND SPACE, INC.",
        "REMINGTON ARMS COMPANY",
        "RENAISSANCE",
        "REPLACEMENTS, LTC",
        "RES-CARE",
        "RESEARCH FOUNDATION FOR MENTAL HYG",
        "RESOURCES FOR HUMAN DEVELOPMENT",
        "RESOURCES GLOBAL PROFESSIONALS",
        "RESTORATION HARDWARE",
        "RESURGENS ORTHOPAEDICS",
        "RETIRED & DISABLED POLICE OF AMERIC",
        "RETIRED INDIANA PUBLIC EMPLOYEES",
        "RETIRED PUBLIC EMPLOYEES OF NEVADA",
        "REXEL HOLDINGS USA",
        "REYES HOLDINGS L.L.C.",
        "REYNOLDS & REYNOLDS",
        "REYNOLDS AMERICAN INC",
        "RHF INVESTMENTS",
        "RHODE ISLAND ASSOC OF SCHOOL PRINCI",
        "RHODE ISLAND COUNCIL 94 AFSCME",
        "RIA GROUP",
        "RICH PRODUCTS CORPORATION",
        "RICHFIELD HOSPITALITY,INC",
        "RICOH CORPORATION",
        "RIDGEWOOD BOARD OF EDUCATION",
        "RIDGEWOOD SAVINGS BANK",
        "RITE AID",
        "RIVERVIEW SCHOOL DISTRICT",
        "RJF INTERNATIONAL CORPORATION",
        "ROAD RUNNER CLUB OF AMERICA",
        "ROANOKE-CHOWAN COMMUNITY COLLEGE",
        "ROBBINS MANUFACTURING, INC",
        "ROBERT MORRIS UNIVERSITY",
        "ROCKFORD PRODUCTS CORPORATION",
        "ROCKINGHAM COMMUNITY COLLEGE",
        "ROCKINGHAM COUNTY SCHOOLS",
        "ROCKWELL AUTOMATION",
        "ROCKWELL COLLINS",
        "ROCKWELL SCIENTIFIC COMPANY",
        "ROCKY MOUNTAIN ORTHODONTICS",
        "ROHM & HAAS ELECTRONIC MATERIALS",
        "ROLLINS INC.",
        "ROOMS TO GO",
        "ROTHMAN INSTITUTE",
        "ROUNDY'S SUPERMARKETS, INC.",
        "ROVI CORPORATION",
        "ROWAN COMPANIES INC",
        "RR DONNELLEY",
        "RSU #19",
        "RTN FEDERAL CREDIT UNION",
        "RUBY TUESDAY",
        "RURAL/METRO CORPORATION",
        "RUSH COPLEY MEDICAL CENTER",
        "RUSH UNIVERSITY MEDICAL CENTER",
        "RW BAIRD",
        "S&S ARNOT OGDEN TERMINATED",
        "S&S BANKBOSTON TERMED",
        "S&S DYNAMICS RESEARCH TERM",
        "S&S FLEET TERM",
        "S&S HITCHNER TERMINATED",
        "S&S ROADWAY TERMED",
        "S. ABRAHAM & SONS",
        "S ABRAHAM & SONS",
        "SABINE STATE BANK & TRUST CO.",
        "SAFETY KLEEN",
        "SAFEWAY, INC",
        "SAGE",
        "SAGER ELECTRONICS",
        "SAINT CLARES HEALTH SYSTEM",
        "SAKS FIFTH AVENUE",
        "SALINE MEMORIAL HOSPITAL",
        "SALT LAKE CITY",
        "SALT LAKE COMMUNITY COLLEGE ALUMNI",
        "SALT LAKE COUNTY",
        "SALT LAKE REGIONAL",
        "SALT RIVER PROJECT",
        "SAMARITAN HEALTHCARE",
        "SAMARITAN MEDICAL CENTER",
        "SAMSUNG AUSTIN SEMICONDUCTOR",
        "SAMSUNG INFORMATION SYSTEMS AMERICA",
        "SAMSUNG TELECOMMUNICATIONS",
        "SAMTEC",
        "SAN ANTONIO FEDERAL CREDIT UNION",
        "SAN ANTONIO INDEPENDENT SCHOOL",
        "SAN DIEGO STATE UNIV. RESEARCH",
        "SAN LEANDRO UNIFIED SCHOOL DISTRICT",
        "SANOFI",
        "SANTANDER HOLDINGS USA, INC",
        "SANYO NORTH AMERICA CORPORATION",
        "SAP AMERICA",
        "SAPERS COM ENERGY TERMINATED",
        "SAPERS STAPLES TERMINATED",
        "SAPIENT",
        "SARAH BUSH",
        "SARAH LAWRENCE COLLEGE",
        "SAS INSTITUTE",
        "SASAKI ASSOCIATES, INC.",
        "SCANSOFT",
        "SCF ARIZONA",
        "SCHINDLER ELEVATOR CORPORATION",
        "SCHLUMBERGER",
        "SCHNEIDER NATIONAL",
        "SCHOLASTIC, INC",
        "SCHOOL DIST KETTLE MORAINE-RETIREES",
        "SCHOOL SPECIALTY, INC.",
        "SCHWAN'S SHARED SERVICES, LLC",
        "SCI COMPANIES",
        "SCITOR CORPORATION",
        "SCOTTISH RITE SOUTHERN JURISDICTION",
        "SCOTT-MCRAE AUTOMOTIVE",
        "SCOTTSDALE UNIFIED SCHOOL DISTRICT",
        "SEA RAY BOATS",
        "SEABURY & SMITH * EMPLOYEES",
        "SEACHANGE INTERNATIONAL",
        "SEAGATE US, LLC",
        "SEARLES VALLEY MINERALS",
        "SEARS HOLDINGS CORPORATION",
        "SEBA",
        "SECOND AMENDMENT FOUNDATION INC.",
        "SEDGWICK CMS",
        "SEI INVESTMENTS",
        "SEIKO CORPORATION OF AMERICA",
        "SELECT PORTFOLIO SERVICING",
        "SENECA FOODS CORP",
        "SENSIENT TECHNOLOGIES",
        "SEPRACOR INC.",
        "SERCO",
        "SERENA SOFTWARE",
        "SERIGRAPH, INC.",
        "SETON HEALTHCARE NETWORK",
        "SEVEN WORLDWIDE INC.",
        "SEVERN TRENT SERVICES",
        "SFM MUTUAL INSURANCE COMPANY",
        "SGS NORTH AMERICA",
        "SHAMROCK FOODS, INC",
        "SHANNON CLINIC",
        "SHANNON MEDICAL CENTER",
        "SHARP",
        "SHARP HEALTHCARE",
        "SHEET METAL WORKERS LOCAL UNION 38",
        "SHELL OIL",
        "SHISEIDO COSMETICS AMERICA LTD",
        "SIEMENS CORPORATION",
        "SIGNATURE PAYROLL SERVICES, LLC.",
        "SILGAN PLASTICS CORPORATION",
        "SIMMONS FOOD",
        "SIMPLY FASHION STORES",
        "SINAI HOSPITAL OF BALTIMORE",
        "SIPEX CORPORATION",
        "SIRVA INC",
        "SITA",
        "SIX FLAGS ENTERTAINMENT CORPORATION",
        "SKILLS OF CENTRAL PA",
        "SKYONE FEDERAL CREDIT UNION",
        "SLM CORPORATION",
        "SMARTHEALTH AND AFFILIATES",
        "SMILE BRANDS INC",
        "SMITH INTERNATIONAL INC",
        "SMITHGROUP INC",
        "SNAP-ON INC EMPLOYEES & RETIREES",
        "SOCIETY FOR HUMAN RESOURCE MANAGEME",
        "SOFTWARE AG",
        "SOLAE, LLC",
        "SOLO CUP COMPANY",
        "SOMERSET MEDICAL CENTER",
        "SONIC AUTOMOTIVE",
        "SONY COMPUTER ENTERTAINMENT AMERICA",
        "SONY ELECTRONICS INC",
        "SORIN GROUP",
        "SOS STAFFING",
        "SOUND CREDIT UNION",
        "SOUTH CAROLINA FEDERAL CREDIT UNION",
        "SOUTH COUNTY HOSPITAL INC",
        "SOUTH PIEDMONT COMMUNITY COLLEGE",
        "SOUTH WHIDBEY SCHOOL DISTRICT",
        "SOUTHEASTERN CONTAINER, INC.",
        "SOUTHERN COMPANY",
        "SOUTHERN MANAGEMENT",
        "SOUTHERN NEW HAMPSHIRE HEALTH",
        "SOUTHERN RESEARCH INSTITUTE",
        "SOUTHERN/NORTHERN NEVADA GOLF ASSOC",
        "SOUTHWEST AIRLINES",
        "SOUTHWEST GENERAL HEALTH CENTER",
        "SOUTHWESTERN COMMUNITYY COLLEGE",
        "SOUTHWIRE COMPANY",
        "SPACE SYSTEMS LORAL LLC",
        "SPACENET, INC.",
        "SPARROW HEALTH SYSTEM",
        "SPARTA, INC.",
        "SPARTAN LIGHT METAL PRODUCTS, INC.",
        "SPAULDING REHABILITATION HOSPITAL",
        "SPECIALTY CARE",
        "SPECTRUM HEALTH - KENT COMMUNITY",
        "SPOKANE PUBLIC SCHOOLS 81",
        "SPORTS AUTHORITY",
        "SPRINT",
        "SPX CORPORATION",
        "SQUIRE, SANDERS & DEMPSEY",
        "SRA INTERNATIONAL",
        "SSA GLOBAL TECHNOLOGIES, INC.",
        "ST MICROELECTRONICS",
        "ST. ANTHONY'S MEDICAL CENTER",
        "ST. BENEDICTS FAMILY MEDICAL CENTER",
        "ST. CLOUD MEDICAL GROUP",
        "ST. CROIX REGIONAL MEDICAL CENTER",
        "ST. FRANCIS HOSP + MED CTR OF CT",
        "ST. JAMES MERCY HOSPITAL",
        "ST. JOHN HEALTH SYSTEM",
        "ST. JOHNS UNIVERSITY - MN",
        "ST. JOSEPH HC CARONDELET-KANSAS CITY",
        "ST. JOSEPH HEALTH SERV OF RHODE I",
        "ST. JOSEPHS/CANDLER HEALTH SYSTEM",
        "ST. LUKE'S EPISCOPAL HEALTH SYS",
        "ST. LUKE'S EPISCOPAL PRESB HOSPITAL",
        "ST. LUKE'S HEALTH SYSTEM",
        "ST. LUKE'S HOSPITAL",
        "ST. MARY'S HEALTH SYSTEM",
        "ST. MARY'S HOSPITAL OF CT",
        "ST. PETERS COLLEGE",
        "ST. THOMAS AQUINAS COLLEGE",
        "ST. VINCENT HOSPITALS & HEALTH SERV",
        "STANADYNE CORPORATION",
        "STANDARD CHARTERED BANK",
        "STANDARD ELECTRIC COMPANY",
        "STANDARD REGISTER",
        "STANFORD HOSPITALS & CLINICS",
        "STANLEY BLACK & DECKER",
        "STANLEY STEEMER INTERNATIONAL INC.",
        "STAPLES-PART TIMERS",
        "STAR GAS PARTNERS",
        "STATE BAR OF GEORGIA",
        "STATE BAR OF WISCONSIN",
        "STATE EMPLOYEES ASSOCIATION OF NC",
        "STATE OF ALABAMA",
        "STATE OF ARIZONA",
        "STATE OF CONNECTICUT",
        "STATE OF FLORIDA - DEPT OF MGMT SVC",
        "STATE OF TEXAS",
        "STATE OF UTAH",
        "STATE STREET BANK AND TRUST COMPANY",
        "STATION CASINOS, INC.",
        "STEFANINI TECH TEAM",
        "STEMILT GROWERS, LLC",
        "STERICYCLE",
        "STERLING MEDICAL CENTER",
        "STEVENSON UNIVERSITY",
        "STEWARD HEALTH CARE SYSTEMS, LLC.",
        "STICKLEY L&JG, INC.",
        "STIFEL NICOLAUS & COMPANY INC",
        "STORMONT-VAIL HEALTHCARE",
        "STRATEGIC OUTSOURCING INC",
        "STRATUS TECHNOLOGIES, INC.",
        "STREAM INTERNATIONAL, INC.",
        "STRUCTURE TONE INCORPORATED",
        "SUBARU OF INDIANA AUTOMOTIVE, INC.",
        "SUB-HUB",
        "SUBURBAN PROPANE",
        "SULLIVAN UNIVERSITY SYSTEM",
        "SUN CHEMICAL CORPORATION",
        "SUNCAST CORPORATION",
        "SUNDT CONSTRUCTION",
        "SUNNEN PRODUCTS COMPANY",
        "SUNRISE COLONY LP",
        "SUNRISE MEDICAL INC.",
        "SUNS LEGACY PARTNERS, LLC.",
        "SUPERIOR ESSEX",
        "SUPERIOR PRINTING INC. COMPANY",
        "SUPERMEDIA LLC",
        "SUPERVALU",
        "SUPREME COUNCIL, AASR",
        "SURGE RESOURCES",
        "SUSAN B. ALLEN MEMORIAL HOSPITAL",
        "SUSQUEHANNA BANCSHARES, INC.",
        "SUSQUEHANNA INTERNATIONAL GRP",
        "SUTTER HEALTH",
        "SWAROVSKI NORTH AMERICA LIMITED",
        "SWEDISH AMERICAN HEALTH SYSTEM",
        "SWIFT TRANSPORTATION COMPANY",
        "SWIRE COCA-COLA, USA",
        "SYCUAN",
        "SYMANTEC CORPORATION",
        "SYNIVERSE TECHNOLOGIES",
        "SYNOPSYS",
        "SYNTHES USA",
        "SYRACUSE UNIVERSITY",
        "SYSCO CORPORATION",
        "SYSTEMS & ELECTRONICS, INC.",
        "T. ROWE PRICE",
        "T ROWE PRICE",
        "TACO, INC",
        "TACOMA NEWS TRIBUNE",
        "TAGHLEEF INDUSTRIES",
        "TALLAHASSEE MEMORIAL REG. MEDICAL",
        "TANG GROUP",
        "TANGOE",
        "TANNER MEDICAL CENTER, INC.",
        "TARGET",
        "TARGET CW",
        "TASC, INC.",
        "TCS AMERICA",
        "TDK CORPORATION",
        "TE CONNECTIVITY",
        "TEACHERS CREDIT UNION",
        "TEAMSTERS LOCAL 25",
        "TECH DATA CORPORATION",
        "TECHNICOLOR",
        "TECK COMINCO AMERICAN",
        "TEICHERT, INC",
        "TEKNION LLC",
        "TELECT INC",
        "TELEPHONE AND DATA SYSTEMS",
        "TELEPHONE WORKERS CREDIT UNION",
        "TEMPEL STEEL",
        "TEMPORARY ACCOUNT",
        "TEMPUR-PEDIC INTERNATIONAL",
        "TENNANT COMPANY",
        "TENNECO AUTOMOTIVE INC.",
        "TENNESSEE DENTAL ASSOCIATION",
        "TENNESSEE MEDICAL ASSOCIATION",
        "TERADATA CORPORATION",
        "TERADYNE INC.",
        "TERRACON INC.",
        "TERUMO BCT, INC.",
        "THE FINISH LINE INC",
        "THE FRIEDKIN COMPANIES",
        "THE GREAT ATLANTIC & PACIFIC TEA CO",
        "THE GUNLOCKE COMPANY",
        "THE HAVI GROUP",
        "THE HOME DEPOT",
        "THE HOSPITAL OF CENTRAL CONNECTICUT",
        "THE J. PAUL GETTY TRUST",
        "THE JACKSON LABORATORY",
        "THE JOHNS HOPKINS HEALTH SYSTEM",
        "THE KROGER CO.",
        "THE MATLEN SILVER GROUP",
        "THE MENTOR NETWORK",
        "THE METHODIST HOSPITAL SYSTEM",
        "THE NATIONAL AFSCME",
        "THE NATIONAL GRANGE",
        "THE NEBRASKA MEDICAL CENTER",
        "THE NEW YORK FOUNDLING HOSPITAL",
        "THE NIELSEN COMPANY",
        "THE ORDER OF UNITED COMMERCIAL TRAV",
        "THE PACIFIC INSTITUTE",
        "THE PEIR GROUP, LLC",
        "THE PENN COMPANIES",
        "THE ROBERT PLAN CORPORATION",
        "THE SALVATION ARMY EASTERN TERRITOR",
        "THE SALVATION ARMY WESTERN TERRITOR",
        "THE SAN DIEGO UNION-TRIBUNE LLC",
        "THE SHEVELL GROUP",
        "THE ST. PAUL COMPANIES, INC",
        "THE SUTHERLAND GRP., LTD.",
        "THE TEXAS HOSPITAL ASSOCIATION",
        "THE TIRE RACK, INC.",
        "THE UNITED GROUP",
        "THE UNIVERSITY OF CHICAGO MEDICINE",
        "THE UNIVERSITY OF KANSAS HOSPITAL",
        "THE VENETIAN CASINO RESORT",
        "THE WESTERN UNION COMPANY",
        "THE WESTMINSTER SCHOOLS",
        "THE WOLF ORGANIZATION INC.",
        "THE YANKEE CANDLE COMPANY",
        "THERMO FISHER SCIENTIFIC",
        "THOMASVILLE CITY SCHOOLS",
        "THOMPSONHEALTH",
        "THOMSON REUTERS",
        "THRESHOLDS, INC",
        "THRUPOINT, INC.",
        "THUNDERBIRD SCHOOL OF GLOBAL MGMT",
        "TIBCO SOFTWARE INC",
        "TIDEWELL HOSPICE & PALLATIVE CARE",
        "TIME WARNER CABLE LLC",
        "TIMKEN COMPANY",
        "TISHMAN HOTEL & REALTY",
        "TIVO INC.",
        "TJX COMPANIES",
        "TMC HEALTHCARE",
        "T-MOBILE",
        "TOLEDO BOARD OF EDUCATION",
        "TOLL BROTHERS, INC.",
        "TOLTZ, KING, DUVALL, ANDERSON AND A",
        "TORAY PLASTICS",
        "TORCHMARK CORPORATION",
        "TORY BURCH",
        "TOWN OF SHREWSBURY",
        "TOWNE PROPERTIES ASSET MGT. CO.",
        "TOYOTA BOSHOKU",
        "TOYOTA MOTOR MFG NORTH AMERICA",
        "TOYOTA MOTOR SALES",
        "TRAILER BRIDGE, INC.",
        "TRANS UNION",
        "TRANSDIGM",
        "TRANSIT FEDERAL CREDIT UNION 1181",
        "TRANSIT MIX CONCRETE CORPORATION",
        "TRANS-LUX CORPORATION",
        "TRANSPLACE INC.",
        "TRANSPORT WORKERS UNION LOCAL 234",
        "TRAVEL LEADERS GROUP, LLC",
        "TRAVELPORT INC.",
        "TRC ENVIRONMENTAL CORPORATION",
        "TREASURE ISLAND, LLC.",
        "TREASURY WINE ESTATES AMERICAS CO",
        "TRIANGLE AUTO CENTER INC",
        "TRIBUNE COMPANY",
        "TRI-CITY MEDICAL CENTER",
        "TRILOGY MANAGEMENT SERVICES, LLC",
        "TRINET",
        "TRINITY HEALTH SYSTEMS",
        "TRIPP LITE",
        "TRI-STATE MOTOR TRANSIT",
        "TRIZETTO CORPORATION A&H",
        "TROPICANA LAS VEGAS",
        "TRUMAN MEDICAL CENTER",
        "TRUMP ENTERTAINMENT RESORTS",
        "TS TECH HOLDING COMPANY",
        "TUALATIN VALLEY FIRE",
        "TUFTS MEDICAL CENTER",
        "TUFTS UNIVERSITY",
        "TULLYS COFFEE",
        "TURNER BROADCASTING SYSTEM",
        "TWIN CITIES ORTHOPEDIC SURGEONS",
        "TWU LOCAL 100 NYC TRANSIT",
        "TYCO INTERNATIONAL - A&H",
        "TYSON FOODS",
        "U.S. HEALTHWORKS HOLDING COMPANY",
        "U.S. VENTURE, INC.",
        "UAW FORD",
        "UBM, LLC",
        "UC HEALTH",
        "UCB INC.",
        "UCHEALTH (COLORADO)",
        "UCHICAGO ARGONNE, LLC, PLAN SPONSOR",
        "UFCW LOCAL 227",
        "UFCW8",
        "UGL SERVICES",
        "U-HAUL INTERNATIONAL INC.",
        "ULTA SALON COSMETICS & FRAGRANCE",
        "UNC HEALTHCARE",
        "UNI SELECT USA",
        "UNIFIED POLICE DEPARTMENT",
        "UNIFORMS TO YOU & CO.",
        "UNILEVER",
        "UNION BANK OF SWITZERLAND",
        "UNION BOARD OF EDUCATION",
        "UNION PUBLIC SCHOOLS",
        "UNISOURCE ENERGY CORPORATION",
        "UNISOURCE WORLDWIDE",
        "UNITED HEALTH SERVICES",
        "UNITED HEALTHCARE CORPORATION",
        "UNITED HOSPITAL SYSTEM INC",
        "UNITED MEMORIAL MEDICAL CENTER",
        "UNITED NATIONS",
        "UNITED RENTALS",
        "UNITED SPACE ALLIANCE",
        "UNITED STATES BOWLING CONGRESS",
        "UNITED STATES COLD STORAGE",
        "UNITED STATES INFRASTRUCTURE CORP",
        "UNITED STATES PARACHUTE ASSOCIATION",
        "UNITED STATES POWER SQUADRONS",
        "UNITED STATIONERS INC.",
        "UNITED SUPERMARKETS",
        "UNITED TECHNOLOGIES",
        "UNITED WATER",
        "UNIV. OF N. CAROLINA GREENSBORO",
        "UNIVERA HEALTHCARE OF WESTERN NY",
        "UNIVERSAL FOREST PRODUCTS",
        "UNIVERSAL HEALTH SERVICES",
        "UNIVERSAL HOSPITAL SERVICES",
        "UNIVERSAL LABORATORY",
        "UNIVERSAL TECHNICAL INSTITUTE",
        "UNIVERSAL TECHNICAL INSTITUTE ALUMN",
        "UNIVERSITY CREDIT UNION",
        "UNIVERSITY HEALTH ASSOCIATES",
        "UNIVERSITY HOSPITALS HEALTH SYSTEM",
        "UNIVERSITY OF ALABAMA HEALTH",
        "UNIVERSITY OF BUFFALO FOUNDATION",
        "UNIVERSITY OF KENTUCKY",
        "UNIVERSITY OF MAINE SYSTEM",
        "UNIVERSITY OF MASSACHUSETTS",
        "UNIVERSITY OF MD MED SYST",
        "UNIVERSITY OF PHOENIX INC",
        "UNIVERSITY OF ROCHESTER",
        "UNIVERSITY OF UTAH",
        "UNIVERSITY OF UTAH HOSP & CLINICS",
        "UNIVISION COMMUNICATIONS",
        "UPMC HEALTH",
        "UPS",
        "URS CORPORATION",
        "US AIRWAYS",
        "US LBM HOLDINGS, LLC",
        "US MARINE",
        "US STEEL CORP",
        "USA MOBILITY",
        "USA TRIATHLON",
        "USBA INC.",
        "USBA INC.",
        "USBA INC.",
        "USBA INC.",
        "USBA INC.",
        "USBA INC.",
        "UT MEDICAL GROUP",
        "UTAH STATE UNIV RESEARCH FOUNDATION",
        "UTAH STATE UNIVERSITY - A&H",
        "UTAH VALLEY UNIVERSITY",
        "UW PHYSICIAN NETWORK",
        "VAIL RESORTS MANAGEMENT COMPANY",
        "VAL VERDE REGIONAL MEDICAL CENTER",
        "VALASSIS COMMUNICATIONS",
        "VALEO SYLVANIA, LLC",
        "VALERO ENERGY CORPORATION",
        "VALLEY BAPTIST MEDICAL CENTER",
        "VALLEY MEDICAL CENTER",
        "VANCE COUNTY SCHOOLS",
        "VANDERBILT UNIVERSITY",
        "VANGUARD GROUP",
        "VANGUARD HEALTH SYSTEMS INC.",
        "VANTAGE ONCOLOGY",
        "VARIAN MEDICAL SYSTEMS",
        "VB SMART SOLUTIONS - SBC",
        "VCU HEALTH SYSTEM",
        "VECTREN CORP.",
        "VELCRO USA INC.",
        "VENTANA MEDICAL SYSTEMS",
        "VEOLIA TRANSPORTATION",
        "VERIO",
        "VERISIGN, INC",
        "VERIZON",
        "VERTAFORE, INC.",
        "VERTEX GROUP",
        "VERTIS COMMUNICATIONS",
        "VESCOM CORPORATION",
        "VESUVIUS USA CORPORATION",
        "VF CORPORATION",
        "VIA TECHNOLOGY",
        "VIAD",
        "VIASAT, INC.",
        "VICTAULIC COMPANY",
        "VIRGINA HOSPITAL CENTER",
        "VISA",
        "VISANT",
        "VISION SERVICE PLAN",
        "VISIONS FEDERAL CREDIT UNION",
        "VISTEON",
        "VMWARE, INC.",
        "VNA OF RHODE ISLAND",
        "VOICE MEDIA GROUP, INC.",
        "VOLKSWAGEN GROUP OF AMERICA",
        "VUTEQ CORPORATION",
        "VWR INTERNATIONAL INC",
        "W. W. GRAINGER",
        "W.E. AUBUCHON",
        "W.R. BONSAL COMPANY",
        "WACHUSETT REGIONAL SCHOOL DISTRICT",
        "WAKE FOREST UNIVERSITY",
        "WAKEFERN CORPORATE",
        "WALKER & DUNLOP, LLC",
        "WALTER ENERGY, INC",
        "WARD TRUCKING",
        "WARNACO GROUP, INC",
        "WARNER MUSIC GROUP",
        "WASHINGTON MANUFACTURERS COUNCIL",
        "WASHINGTON REGIONAL MEDICAL SYSTEM",
        "WASHINGTON STATE PTA",
        "WATERWORKS, INC.",
        "WAYNE MEMORIAL HOSPITAL",
        "WAYNESBORO HOSPITAL",
        "WB MASON",
        "WEATHERFORD INTERNATIONAL",
        "WEBASTO ROOF SYSTEMS, INC",
        "WEBER STATE UNIVERSITY",
        "WEBMD (A&H)",
        "WEBSTER BANK",
        "WEEKS MARINE, INC",
        "WELLINGTON MANAGEMENT",
        "WELLSPAN HEALTH",
        "WEST MARINE PRODUCTS",
        "WEST VIRGINIA AUTO & TRUCK DEALERS",
        "WEST VIRGINIA MANUFACTURERS ASSOC.",
        "WESTAR ENERGY",
        "WESTCHESTER COMMUNITY COLLEGE ALUMN",
        "WESTERLY HOSPITAL",
        "WESTERN CONNECTICUT HEALTH NETWORK",
        "WESTERN DENTAL SERVICES, INC.",
        "WESTINGHOUSE ELECTRIC",
        "WESTINGHOUSE LIGHTING CORPORATION",
        "WESTLAKE HARDWARE INC.",
        "WESTMINSTER COLLEGE",
        "WESTON SOLUTIONS",
        "WICHITA CLINIC",
        "WIEDEN & KENNEDY",
        "WILLIAM JEWELL COLLEGE",
        "WILLIAMS LEA, INC.",
        "WILLIAMS SCOTSMAN INC.",
        "WILLIS NORTH AMERICA INC.",
        "WILLOW VALLEY RETIREMENT",
        "WILSON INTERNATIONAL, INC.",
        "WILSON TECHNICAL COMMUNITY COLLEGE",
        "WILTON BRANDS LLC",
        "WINCO FOODS, INC",
        "WINDSTREAM COMMUNICATIONS",
        "WINGATE HEALTHCARE",
        "WINN-DIXIE STORES INC",
        "WINSTON & STRAWN LLP - A&H",
        "WINTHROP UNIVERSITY HOSPITAL",
        "WIPRO LTD",
        "WMS INDUSTRIES, INC",
        "WOLF CREEK NUCLEAR OPER CORP-RETIRE",
        "WOLTERS KLUWER US CORP",
        "WOOD GROUP",
        "WOODBRIDGE TOWNSHIP  BOARD OF ED",
        "WOODMEN OF THE WORLD",
        "WOODRUFF SAWER & CO.",
        "WOODWARD, INC",
        "WORKERS COMPENSATION FUND",
        "WORLD KITCHEN",
        "WORLD TRAVEL HOLDINGS",
        "WORLD TRAVELERS OF AMERICA, INC.",
        "WORLDWIDE EQUIPMENT INC",
        "WPP GROUP",
        "WTAS, LLC",
        "WYLE - A&H",
        "WYNN RESORTS",
        "XCEL ENERGY",
        "XCEL FEDERAL CREDIT UNION",
        "XCEL HR",
        "XERIUM TECHNOLOGIES, INC.",
        "XEROX BUSINESS SERVICES, LLC",
        "XEROX CORPORATION",
        "XEROX-NASG",
        "XILINX INC",
        "XIUS BCGI",
        "XTRA CORPORATION",
        "XYLEM INC.",
        "YALE NEW HAVEN HEALTH SYSTEM",
        "YALE UNIVERSITY",
        "YAMAHA MOTOR CORPORATION, USA",
        "YASKAWA AMERICA, INC. - MOTOMAN ROB",
        "YASKAWA ELECTRIC AMERICA, INC.",
        "YAZAKI NORTH AMERICA, INC.",
        "YELLOW ROADWAY CORP., WORLDWIDE",
        "YESCO",
        "YM LLC USA",
        "YOAKUM COMMUNITY HOSPITAL",
        "YOGA ALLIANCE",
        "YOUNG ADULT INSTITUTE",
        "YOUNG AND RUBICAM BRANDS",
        "YWCA OF GREATER PITTSBURGH",
        "ZALE CORPORATION",
        "ZAPPOS.COM INC",
        "ZOCDOC",
        "ZOETIS, INC",
        "ZYGO CORPORATION",
        "ZYNGA GAME NETWORK INC.");
    var outp;
    var oldins;
    var posi = -1;
    var words = new Array();
    var input;
    var key;


    $(document).ready(function () {
        init();
        setWidth();
    });

    $(window).resize(function () {
        if (!$(".hidden-xs").is(":visible")) {
            setVisible();
        }
        setWidth();

    });
    function setVisible(visi) {
        var x = document.getElementById("shadow");
        var t = document.getElementsByClassName("comapny-name-search")[0];
        x.style.top = (findPosY(t) + 3) + "px";
        x.style.left = (findPosX(t) - 30) + "px";
        x.style.visibility = visi;
    }

    function setWidth() {
        var searchWidth = document.getElementById("companyName").getBoundingClientRect().width;
        document.getElementById("output").setAttribute("style", "width:" + searchWidth + "px");
    }

    function init() {

        if ($(".shadow").length != 0) {
            outp = document.getElementById("output");
            window.setInterval("lookAt()", 100);
            setVisible("visible");
            document.onkeydown = keygetter; //needed for Opera...
            document.onkeyup = keyHandler;
        }

    }

    function findPosX(obj) {
        var curleft = 0;
        if (obj.offsetParent) {
            while (obj.offsetParent) {
                curleft += obj.offsetLeft;
                obj = obj.offsetParent;
            }
        }
        else if (obj.x)
            curleft += obj.x;
        return curleft;
    }

    function findPosY(obj) {
        var curtop = 0;
        if (obj.offsetParent) {
            curtop += obj.offsetHeight;
            while (obj.offsetParent) {
                curtop += obj.offsetTop;
                obj = obj.offsetParent;
            }
        }
        else if (obj.y) {
            curtop += obj.y;
            curtop += obj.height;
        }
        return curtop;
    }

    function lookAt() {
        var ins = document.getElementsByClassName("comapny-name-search")[0].value;
        if (oldins == ins) return;
        else if (posi > -1);
        else if (ins.length > 0) {
            words = getWord(ins);
            if (words.length > 0) {
                clearOutput();
                for (var i = 0; i < words.length; ++i) addWord(words[i]);
                setVisible("visible");
                input = document.getElementsByClassName("comapny-name-search")[0].value;
            }
            else {
                setVisible("hidden");
                posi = -1;
            }
        }
        else {
            setVisible("hidden");
            posi = -1;
        }
        oldins = ins;
    }

    function addWord(word) {
        var sp = document.createElement("div");
        sp.appendChild(document.createTextNode(word));
        sp.onmouseover = mouseHandler;
        sp.onmouseout = mouseHandlerOut;
        sp.onclick = mouseClick;
        outp.appendChild(sp);
    }

    function clearOutput() {
        while (outp.hasChildNodes()) {
            noten = outp.firstChild;
            outp.removeChild(noten);
        }
        posi = -1;
    }

    function getWord(beginning) {
        var words = new Array();
        for (var i = 0; i < suggestions.length; ++i) {
            var j = -1;
            var correct = 1;
            while (correct == 1 && ++j < beginning.length) {
                if (suggestions[i].charAt(j) != beginning.charAt(j).toLowerCase()) {
                    if (suggestions[i].charAt(j) != beginning.charAt(j).toUpperCase())
                        correct = 0;
                }
            }
            if (correct == 1 && beginning.length > 1)
                words[words.length] = suggestions[i];
        }
        return words;
    }


    function setColor(_posi, _color, _forg) {
        outp.childNodes[_posi].style.background = _color;
        outp.childNodes[_posi].style.color = _forg;
    }

    function keygetter(event) {
        if (!event && window.event) event = window.event;
        if (event) key = event.keyCode;
        else key = event.which;
    }

    function keyHandler(event) {
        if (document.getElementById("shadow").style.visibility == "visible") {
            var textfield = document.getElementsByClassName("comapny-name-search")[0];
            if (key == 40) { //Key down
                //alert (words);
                if (words.length > 0 && posi < words.length - 1) {
                    if (posi >= 0) setColor(posi, "#fff", "#666666");
                    else input = textfield.value;
                    setColor(++posi, "#5e81bc", "white");
                    textfield.value = outp.childNodes[posi].firstChild.nodeValue;
                }
            }
            else if (key == 38) { //Key up
                if (words.length > 0 && posi >= 0) {
                    if (posi >= 1) {
                        setColor(posi, "#fff", "#666666");
                        setColor(--posi, "#5e81bc", "white");
                        textfield.value = outp.childNodes[posi].firstChild.nodeValue;
                    }
                    else {
                        setColor(posi, "#fff", "#666666");
                        textfield.value = input;
                        textfield.focus();
                        posi--;
                    }
                }
            } else if (key == 13) {
                document.getElementsByClassName("comapny-name-search")[0].value = outp.childNodes[posi].firstChild.nodeValue;
                setVisible("hidden");
                posi = -1;
            }
            else if (key == 27) { // Esc
                textfield.value = input;
                setVisible("hidden");
                posi = -1;
                oldins = input;
            }
            else if (key == 8) { // Backspace
                posi = -1;
                oldins = -1;
            }
        }
    }

    var mouseHandler = function () {
        for (var i = 0; i < words.length; ++i)
            setColor(i, "white", "#666666");

        this.style.background = "#5e81bc";
        this.style.color = "white";
        
    }

    var mouseHandlerOut = function () {
        this.style.background = "white";
        this.style.color = "#666666";

    }

    var mouseClick = function () {
        document.getElementsByClassName("comapny-name-search")[0].value = this.firstChild.nodeValue;
        setVisible("hidden");
        posi = -1;
        oldins = this.firstChild.nodeValue;


    }

    $('body').on('click touchstart tap', function (e) {
        var companySearchContainer = $("#output");


        if (!companySearchContainer.is(e.target) && companySearchContainer.has(e.target).length === 0 ) {
            setVisible("hidden");
        }

    });

}