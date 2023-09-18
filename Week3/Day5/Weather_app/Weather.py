# Get the current weather in Tel Aviv.
# Get current wind info of Tel Aviv.
# Get today’s sunrise and sunset times of Tel Aviv.
# Display all these information in a user friendly way.

import requests
lat = 32.08
lon = 34.78
response = requests.get('https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=aeca4dfe96186e755db82cb454a42d70')
# response = requests.get(f"https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&appid=aeca4dfe96186e755db82cb454a42d70")
print(response.status_code)


# Recreate these steps, but this time, ask the user for a location (display the information in a user friendly way).
# Instead of working with the name of the city, retrieve the id of the city.
# Check out the documentation section : “Identifying cities and places via city IDs”.

# Retrieve weather forecasts : The OpenWeatherMap free tier gives you access to 5 day forecasts. The forecasts contain the weather data in three-hour intervals.
# The methods for retrieving the forecast are:
# forecast_at_place('Los Angeles, US', '3h')
# forecast_at_id(5391959, '3h')
# forecast_at_coords(lat=37.774929, lon=-122.419418, interval='3h')
# Forecasts are useful if you want to know what the weather conditions will be throughout the day/week.

# Use this API to retrieve the Air Pollution in a specific city.
