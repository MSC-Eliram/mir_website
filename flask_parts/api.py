# dependencies
from bs4 import BeautifulSoup
# import pandas as pd 
import requests
from flask import Flask, jsonify
from flask_cors import CORS
import json

app = Flask(__name__)
CORS(app)

@app.route('/')
def you_man():
    return "fuck you man."

@app.route('/time')
def get_current_time():
    return 'the time is now'
    #return {'time': time.time()}

@app.route('/job_postings')
def get_job_postings():
    # Pull back most basic info from our page
    url_1 = "https://mirlogic.bamboohr.com/jobs/"

    webpage = requests.get(url_1)
    soup = BeautifulSoup(webpage.content, 'html.parser')

    job_position_data = soup.findAll(id='positionData')
    jobs_list = job_position_data[0].string
    job_json = json.loads(jobs_list)

    all_list_objects = []
    for job in job_json:
        listing_object = {}
    
        #LISTING NAME
        listing_object["LISTING"] = job['jobOpeningName']
        
        #LINK
        listing_object["LINK"] = 'http://mirlogic.bamboohr.com/jobs/view.php?id=' + str(job['id']) + '&source=other'
        
        #PLACE
        listing_object["PLACE_1"] = job['location']['city']
        listing_object["PLACE_2"] = job['location']['state']

        #TYPE
        listing_object["TYPE_1"] = job['departmentLabel']
        listing_object["TYPE_2"] = job['employmentStatusLabel']

        all_list_objects.append(listing_object)

    return {"all_list": all_list_objects}

if __name__== '__main__':
    app.run(host='127.0.0.1', port='5000')