/*
    Time complexity: O(log(N) ^ 2)
    Space complexity: O(1)

    Where N is the number of trailing zeros.
*/

int countTrailingZeros(int x)
{
    // Count the number of trailing zeros using the formula:
    // Trailing 0s in X! = floor(X / 5) + floor(X / 25) + floor(X / 125) + ...

    int count = 0;
    int div = 5;

    while (div <= x)
    {
        count += (x / div);

        div = div * 5;
    }

    return count;
}

int findSmallestNumber(int n)
{
    int low = 0, high = 5 * n;

    // Apply Binary Search in the range [0, 5N].
    while (low < high)
    {
        int mid = low + (high - low) / 2;

        // Find the number of trailing zeros in mid!.
        int count = countTrailingZeros(mid);

        // Check if mid! contains at least N trailing zeros.
        if (count >= n)
        {
            high = mid;
        }
        else
        {
            low = mid + 1;
        }
    }

    return low;
}