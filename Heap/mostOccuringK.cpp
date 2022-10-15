// C++ program to find k numbers with most
// occurrences in the given array

#include <bits/stdc++.h>
using namespace std;

void print_N_mostFrequentNumber(int arr[], int N, int K)
{
	// HashMap to store count of the elements
	unordered_map<int, int> elementCount;
	for (int i = 0; i < N; i++) {
		elementCount[arr[i]]++;
	}

	// Array to store the elements according
	// to their frequency
	vector<vector<int> > frequency(N + 1);

	// Inserting elements in the frequency array
	for (auto element : elementCount) {
		frequency[element.second].push_back(element.first);
	}

	int count = 0;
	cout << K << " numbers with most occurrences are:\n";

	for (int i = frequency.size() - 1; i >= 0; i--) {

		for (auto element : frequency[i]) {
			count++;
			cout << element << " ";
		}

		// if K elements have been printed
		if (count == K)
			return;
	}

	return;
}


int main()
{
	int arr[] = { 3, 1, 4, 4, 5, 2, 6, 1 };
	int N = sizeof(arr) / sizeof(arr[0]);
	int K = 2;

	print_N_mostFrequentNumber(arr, N, K);

	return 0;
}
