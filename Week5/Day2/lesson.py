import pandas as pd
import numpy as np


# series = pd.Series([1, 2, 3, 4])
# print(series)

# df = pd.DataFrame({
#    "Name": ["Alice", "Bob", "Charlie"],
#    "Age": [25, 32, 22]
# })
# print(df)

data = {
   "fruits": ["apple", "banana", "cherry"],
   "count": [10, 20, 15]
}
df = pd.DataFrame(data)
# print(df)

# df.to_csv('test_data.csv', index=False)

# series = pd.Series([1, 2, 3, 4], index=['a', 'b', 'c', 'd'])
# print(series)


fruit_series = pd.Series([20, 30, 15, 10], index=['Apples', 'Bananas', 'Cherries', 'Dates'])
# print(fruit_series)

fruit_df = pd.DataFrame({
   "Quantity": [20, 30, 15, 10],
   "Color": ['red', 'yellow', 'red', 'brown'],
   "Price per kg": [3, 2, 4, 5]
}, index=['Apples', 'Bananas', 'Cherries', 'Dates'])

# print(fruit_df)
# fruit_df.to_csv('store_1_stock.csv', index=False)

store_1_stock = pd.read_csv('store_1_stock.csv')
# print(store_1_stock)

# print(fruit_df.head(3))
# print(fruit_df.tail(3))
# df.info()
# print(df.describe())
# print(fruit_df['Quantity'].sum())
# print(fruit_df.nlargest(3, 'Quantity')) 

# print(fruit_df.loc['Bananas', 'Price per kg'])

fruit_df['Sale_Price'] = fruit_df['Price per kg']*0.9
fruit_df.rename(columns={'Price per kg': 'Original_Price'}, inplace=True)
fruit_df.drop('Color', axis=1, inplace=True)

new_data = pd.DataFrame({"Quantity": [np.nan], "Original_Price": [3.5]}, index=['Grapes'])
fruit_df = pd.concat([fruit_df, new_data], ignore_index=False)

# print(fruit_df)

# print(fruit_df.isna())
# fruit_df['Quantity'].astype(int)
# print(fruit_df['Quantity'].dtype)

# print(fruit_df['Quantity'].sum())

# print(fruit_df['Quantity'].idxmax(), fruit_df['Quantity'].max())
# print(fruit_df['Quantity'].idxmin(), fruit_df['Quantity'].min())
# print(fruit_df['Original_Price'].mean())


df = pd.DataFrame({
    'A': [1, 2, 3, 4],
    'B': [10, 20, 30, 40],
    'C': [100, 200, 300, 400]
})

# Using map() function to replace values in a Series
df['A'] = df['A'].map({1: 'one', 2: 'two'})

df[['B', 'C']] = df[['B', 'C']].apply(np.sqrt)

df = pd.DataFrame({
    'Animal': ['Falcon', 'Falcon', 'Parrot', 'Parrot'],
    'Max Speed': [380., 370., 24., 26.],
    'Weight': [1, 1.5, 0.3, 0.5]
})

df_grouped = df.groupby('Animal').mean()

# print(df_grouped)

# Creating a DataFrame with some null values
data = {
    "Fruit": ["Apple", "Banana", None, "Date", "Grapes"],
    "Quantity": [20, 30, 15, None, 25], 
    "Price": [3, 2, 4, 5, None],
    "Supplier": ["Supplier1", "Supplier2", "Supplier1", None, "Supplier1"]
}

df_null = pd.DataFrame(data)

# df_drop = df_null.dropna()
df_fill = df_null.fillna(12)
# Display the DataFrame
# print(df_fill)

date = pd.to_datetime("4th of July, 2023")



data = {
    "Fruit": ["Apple", "Banana", "Date", "Grapes", "Apple", "Date", "Cherry", "Peach"],
    "Quantity": [10, 15, 50, 25, 100, 150, 175, 200],
    "Price": [2.5, 1.0, 3.5, 2.0, 2.5, 3.5, 3.1, 2.5],
    "Updated_Price": [2.0, 1.2, 3.5, 2.0, 2.0, 3.5, 3.1, 2.5],
    "Supplier": ["Supplier1", "Supplier2", "Supplier3", "Supplier1", 
                "Supplier2", "Supplier3", "Supplier4", "Supplier4"]
}

df = pd.DataFrame(data)

arrival_dates = ["2023-07-01", "2023-07-05", "2023-07-10", "2023-07-15", "2023-07-20", "2023-07-10", "2023-07-15", "2023-07-20"]

Arr_date = pd.to_datetime(arrival_dates)
# print(Arr_date)

df['Arrival dates'] = Arr_date

sales = pd.Series([150, 200, 250, 150, 300, 200, 250, 300, 350, 400, 350, 
                  200, 250, 300, 400],
                  index = pd.date_range('2023-07-01', periods=15, freq='D'))

# Print the DataFrame
# print(sales.resample('W').sum())


df = pd.DataFrame({
   'A': np.random.rand(10),
   'B': np.random.rand(10)
})

df.plot()