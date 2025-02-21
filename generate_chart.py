import matplotlib.pyplot as plt
import numpy as np

# Data
battery_capacity = ["100%", "90%", "80%", "60%", "40%", "20%", "10%"]
range_miles = [260, 234, 218, 180, 130, 60, 20]

# Create the plot
plt.figure(figsize=(10, 6))
plt.plot(battery_capacity, range_miles, marker="o", color="#4BC0C0", linewidth=2)

# Customize the plot
plt.title("Audi Q4 ETron 45 Range vs Battery Capacity (February 2025)", pad=20)
plt.xlabel("Battery Capacity")
plt.ylabel("Range (miles)")
plt.grid(True, linestyle="--", alpha=0.7)

# Set y-axis to start at 0
plt.ylim(bottom=0)

# Add some padding to the layout
plt.tight_layout()

# Save the plot
plt.savefig("chart-screenshot.png", dpi=300, bbox_inches="tight")
