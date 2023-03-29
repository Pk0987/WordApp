from prometheus_client import Counter, Gauge, Summary, Histogram

wordapp_home_page_api_calls = Counter('wordapp_home_page_api_calls', 'Total request of home page endpoint')

wordapp_user_creation_metric = Counter('wordapp_user_creation_metric', 'Total number of user registered')

wordapp_user_login_metric = Counter('wordapp_user_login_metric', 'Total number of login')

wordapp_total_word_fetching_metric = Counter('wordapp_total_word_fetching_metric', 'Total number of words fetching')

wordapp_session_logged_in_total = Counter('wordapp_session_logged_in_total', 'Total active session users')

wordapp_session_logged_out_total = Counter('wordapp_session_logged_out_total', 'Total logged out session users')

wordapp_api_request_latency = Summary('wordapp_api_request_latency', 'word api latency seconds')