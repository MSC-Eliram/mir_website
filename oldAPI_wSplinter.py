from splinter.exceptions import ElementDoesNotExist
from splinter import Browser
import os
from selenium import webdriver

import prettify
import time

#app.config.from_object("config")
#app.config['CORS_HEADERS'] = 'Content-Type'

#@cross_origin(origin="http://127.0.0.1:3000")

@app.route('/job_postings')
def get_job_postings():
    PROJECT_ROOT = os.path.dirname(os.path.realpath('__file__'))
    DRIVER_BIN = os.path.join(PROJECT_ROOT, "C:/bin/chromedriver")

    browser = webdriver.Chrome(executable_path = DRIVER_BIN)
    browser.get("https://mirlogic.bamboohr.com/jobs")

    # Set up for Splinter
    #driver = webdriver.Chrome(r"C:/bin/chromedriver.exe")
    executable_path = {'executable_path': 'C:/bin/chromedriver'}
    browser = Browser('chrome', **executable_path, headless=False)

    # Pull back most basic info from our page
    url_1 = "https://mirlogic.bamboohr.com/jobs/"

    browser.visit(url_1)
    html = browser.html
    soup = BeautifulSoup(html, 'html.parser')

    job_info = soup.findAll('div', itemtype='http://schema.org/JobPosting')

    # Bring us the entire list
    all_list_objects = []
    for jobber in job_info:
        listing_object = {}

        #LISTING NAME
        listing_object["LISTING"] = jobber.a.string.strip()

        #LINK
        listing_object["LINK"] = jobber.meta["content"]
        wrap_sections = jobber.findAll(class_="ResAts__listing-sectionWrapper")

        #PLACE 1 PLACE 2
        x = 1
        for div in wrap_sections[0].div.children:
            if (div.string != " "):
                listing_object["PLACE_" + str(x)] = div.string
                x += 1

        #TYPE 1 TYPE 2
        y = 1
        for div in wrap_sections[1]:
            if (div.string != " " and div.string != None):
                listing_object["TYPE_" + str(y)] = div.string.strip()
                y += 1

        print(listing_object)
        all_list_objects.append(listing_object)

    return {"all_list": all_list_objects}
