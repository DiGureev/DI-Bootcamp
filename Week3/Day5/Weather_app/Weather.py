
from pyowm.owm import OWM
from pyowm.utils import timestamps
import datetime

def weather_today(location):
    owm = OWM('aeca4dfe96186e755db82cb454a42d70')
    mgr = owm.weather_manager()
    place = location
    try:
        observation = mgr.weather_at_place(place)  # the observation object is a box containing a weather object
        weather = observation.weather
        
        temp_dict_celsius = weather.temperature('celsius')
        wind_dict_in_meters_per_sec = observation.weather.wind()   
        sunrise_date = weather.sunrise_time(timeformat='date')
        sunrset_date = weather.sunset_time(timeformat='date')

        print(f"Hi! Temprature in {place} today: {str(temp_dict_celsius['temp'])}, feels like: {str(temp_dict_celsius['feels_like'])}, the wind is: {str(wind_dict_in_meters_per_sec)}, sunrise at {sunrise_date}, sunset at: {sunrset_date}")

    except Exception as e:
        print(f'No such location {e}')


# weather_today('Tashkent, UZ')

def get_forecast(location):
    owm = OWM('aeca4dfe96186e755db82cb454a42d70')
    mgr = owm.weather_manager()
    place = location
    three_h_forecast = mgr.forecast_at_place(place, '3h').forecast
    nr_of_weathers = len(three_h_forecast)
    print(f'Here is the forecast in {place} for next 5 days:')
    forecast_list = []
    for weather in three_h_forecast:
        a = f"{weather.reference_time('iso')[0:11]} {weather.status}"
        if a not in forecast_list:
            forecast_list.append(a)
    print('\n'.join(forecast_list))

# get_forecast('Tashkent, UZ')

def pollution(lat, lon):
    owm = OWM('aeca4dfe96186e755db82cb454a42d70')
    mgr = owm.airpollution_manager()
    coi = mgr.coindex_around_coords(lat, lon) #"coindex_around_coords" is deprecated
    print(coi)
    # print(mgr.__dir__())

pollution(32.0853, 34.7818) #Unable to find the resource


