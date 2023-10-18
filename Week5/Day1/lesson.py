import numpy as np

# array = np.array([1, 2, 3])
# print(array)

array_1d = np.array([1, 2, 3, 4, 5])

# print(array_1d)

# print(array_1d.ndim)
# print(array_1d.shape)
# print(array_1d.dtype)

# array_2d = np.array([[1, 2, 3], [4, 5, 6]])
# print(array_2d)

# zeros = np.zeros((3, 2))
# print(zeros)


# Create an array of integers
array = np.array([1, 2, 3, 4, 5])

# Convert to float type
float_array = array.astype('float64')

# print(float_array)  # Output: array([1., 2., 3., 4., 5.])
# print(float_array.dtype)  # Output: float64

array = np.arange(10, 21)

float_array = array.astype('float')

# print(array.ndim)
# print(array.shape)
# print(array.size)
# print(array.dtype)
# print(float_array.astype('int32'))

# mult = array * 2
# print(mult)


# array = np.arange(10, 21)
# print(array[3])

# array_2d = np.array([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
# print(array_2d[1,2])

array = np.arange(10)
# print(array[2:6])
# print(array_2d[:2, 1:])

# array = np.arange(5, 15, 3)
# print(array)

# sequence = np.linspace(0, 100, 5)
# print(sequence)

# random_numbers = np.random.rand(5, 5)
# print(random_numbers)

# random_numbers = np.random.randint(0, 20, 3)
# print(random_numbers)

# array = np.arange(20, 31)
# array = np.arange(10, 21, 2)
# array = np.linspace(0, 1, 5)
# array = np.random.rand(3)
# array = np.random.randint(1, 10, 4)
# print(array)

# matrix = np.array([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
# print(matrix)


# array = np.arange(10)
# matrix = np.reshape(array, (2,5))
# matrix = np.eye(4)
# print(matrix)

# array = np.arange(1,10)
# matrix = np.reshape(array, (3,3))
# print(matrix)

matrix = np.array([[10, 20, 30], [40, 50, 60], [70, 80, 90]])
# print(matrix[2, 1])
# matrix_mean = matrix - matrix.mean(axis=1, keepdims=True)
# print(matrix_mean)

# matrix = np.array([[4, 2, 3], [6, 1, 5], [7, 9, 8]])
# sorted_matrix = matrix[matrix[:,1].argsort()]
# matrix[[0, 2]] = matrix[[2, 0]]
# print(matrix)

# lst_2d = [[3, 5, 7, -4, 1], 
#           [0, 5, 33, -750, 2]]

# numpy_arr_2d = np.array(lst_2d)
# array = np.mean(numpy_arr_2d, 1)
# print(array)

# help(np.sqrt)
# print(np.sqrt.__doc__)

# array = np.arange(1,6)
# print(np.square(array))

array1 = np.arange(1,6)
array2 = np.arange(6,11)
# print(array1 / array2)

# print(np.add.__doc__)

# array = np.array([1, 0, 2, 0, 3, 0, 4, 5])
# indices = np.nonzero(array)
# print(indices)

array = np.arange(1, 26)
array2d = np.reshape(array, (5, 5))
array_top_right = array2d[:3, 2:]
array2d[:,-1] = np.arange(10, 15)
# print(array2d)

matrix1 = np.reshape(np.arange(1, 10), (3,3))
matrix2 = np.reshape(np.arange(10, 19), (3,3))
a = np.matmul(matrix1, matrix2)
# print(a)
# print(matrix1 * matrix2)
# print(np.transpose(matrix1))

sequence = np.arange(20, 41, 2)
ind = np.nonzero(sequence>30)
# print(ind)

numbers = np.array([2, 2, 1, 1, 1, 0, 0, 0, 3, 3])
count = np.bincount(numbers)
recreated_array = np.repeat(np.arange(len(count)), count)
print(recreated_array)
