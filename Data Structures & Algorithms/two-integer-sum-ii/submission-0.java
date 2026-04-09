class Solution {
    public int[] twoSum(int[] numbers, int target) {
        HashMap<Integer, Integer> store = new HashMap<>();

        for (int i = 0; i < numbers.length; i++) {
            int reqNum = target - numbers[i];

            // Check if the required number is already in the map
            if (store.containsKey(reqNum)) {
                return new int[]{store.get(reqNum) + 1, i + 1}; // Return 1-based indices
            }

            // Store the current number and its index
            store.put(numbers[i], i);
        }
        
        return new int[]{}; // Return an empty array if no solution found
    }
}
