import requests
import os
import time
from dotenv import load_dotenv
load_dotenv()
from Prometheus.function import wordapp_total_word_fetching_metric, wordapp_api_request_latency



class Requests_class:
    def __init__(self):
        pass
    def norm_requests(self, word, request_type): 
        wordapp_total_word_fetching_metric.inc()
        start_time = time.time()
        url = f"https://wordsapiv1.p.rapidapi.com/words/{word}/{request_type}"
        headers = { "X-RapidAPI-Key": os.environ['API_KEY'], "X-RapidAPI-Host": os.environ['API_HOST'] }
        response = requests.request("GET", url, headers=headers)
        wordapp_api_request_latency.observe(time.time() - start_time)
        return(response.text)