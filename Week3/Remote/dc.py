# Instructions : Air Management System
# Your goal is to build an airplanes traffic management system.

# Details
# Your program should rely on four classes: Airline, Airplane, Flight and Airport.

# Consider every plane can fly only once per day.


# The Airline Class

# Attributes:

# id (str) A two letters code
# name (str)
# planes : A list of Airplanes belonging to this airline (see below the Airplane class)
# This class has no methods


# The Airplane Class
# Attributes:

# id (int)
# current_location : The Airport where the airplane is currently located (see below the Airport class)
# company : The airline this airplane belongs to (see above the Airline class)
# next_flights : The list of Flights. Every future flights of the airplane, this list should always be sorted by datetime. (see below the Flight class)


# Methods:

# fly(self, destination): Make the airplane take off and land if a flight is scheduled for this 
# destination (see below the Flight class)
# location_on_date(self, date): Returns where the plane will be on this date
# available_on_date(self, date, location) : Returns True if the plane can fly from this location 
# on this date (it can fly if it is in this location on this date and if it doesn’t already have a flight planned).

# The Flight Class
# Attributes:

# date : datetime.Date
# destination : The destination airport. (see below the Airport class)
# origin : The departure airport. (see below the Airport class)
# plane : The plane used during this flight. (see above the Airplane class)
# id (str) : The ID is an encoded string composed of the destination, the airlines code and the date.
# Methods:

# Those methods are here only to update the rest of the system:

# take_off(self)
# land(self) : change the location of the plane when it reaches its destination

# The Airport Class
# Attributes:

# city : (str) The code of the city where the airport is located
# planes : The list of every plane that is currently in this airport. (see above the Airplane class)
# scheduled_departures : The list of flight - Every future flight from this airport, sorted by date. (see above the Flight class)
# scheduled_arrivals : The list of flight - Every future flight that will arrive to this airport, sorted by date. (see above the Flight class)



from datetime import datetime

class Airline:

    def __init__(self, name, planes):
        self.name = name
        self.planes = planes

class Airplane:

    def __init__(self, id, current_location, company, next_flights):
        self.id = id
        self.location = current_location
        self.company = company
        self.flights = next_flights

    def fly(self, destination):
        if self.location == destination:
            print(f'The plane has landed in {destination}')
        else:
            print(f'The plane has taken off to {destination}')

    def location_on_date(self, date):
        pass

    def available_on_date(self, date, location):
        pass


class Flight:

    def __init__(self, date, destination, origin, plane, id):
        self.date = datetime(date)
        self.destination = destination
        self.origin = origin
        self.plane = plane
        self.id = id

    def take_off(self):
        pass

    def land(self):
        self.plane.location = self.destination

class Airport:

    def __init__(self, city, planes, scheduled_departures, scheduled_arrivals):
        self.city = city
        self.planes = planes
        self.departures = scheduled_departures
        self.arrivals = scheduled_arrivals

    def schedule_flight(self, destination, datetime):


    
# Methods:

# schedule_flight(self, destination, datetime) :
# finds an available airplane from an airline, that serves the departure and the destination
# schedule the airplane for the flight
# info(self, start_date, end_date) : Displays every scheduled flight from start_date to end_date.

# Write a small code to test your program.