# Food Store
A React Native application that allows users to explore restaurants, add items to the cart, place orders, and manage favorites.

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/restaurant-app.git

2. Install dependencies:
   ```bash
    cd restaurant-app
    npm install
 
3. Install Android Studio and Dependencies:
 To set up the Android development environment, follow these steps:

    * Install Android Studio on your computer. During installation, ensure that you select the following components:
      - Android SDK
      - Android SDK Platform
      - Android Virtual Device
      - If not using Hyper-V: Performance (Intel ® HAXM) (For AMD or Hyper-V, refer to these instructions).

    * Open Android Studio, click on `"More Actions,"` and select `"SDK Manager."` Within the `"SDK Platforms"` tab, ensure that `"Android SDK Platform 33"` is checked.

    * In the `"SDK Tools"` tab, ensure that `"Android SDK Build-Tools 33.0.0"` is selected.

    * Configure the `ANDROID_HOME` environment variable to point to your Android SDK location `(usually %LOCALAPPDATA%\Android\Sdk)`.

    * Add the platform-tools directory `(usually %LOCALAPPDATA%\Android\Sdk\platform-tools)` to your system's PATH environment variable.

     Alternatively, you can follow the [React Native Android setup guide](https://reactnative.dev/docs/environment-setup?guide=native) for detailed instructions.

  
4. Run the app on iOS or Android:
     ```bash
     npm run ios
     npm run android
    
## Technologies Used
- React Native
- Redux Toolkit
- React Navigation

## Functionality
- Filter Restaurants 
- Add in cart
- Remove from cart
- Place order
- Add to favorite

## Screenshots/GIFs
### Filter Restaurants
<img src="https://github.com/ceacaiosifclaudiu/Food-Store---React-Native/assets/110819428/82b79470-36ad-4f46-8f98-898d102e73ed" alt="BasicShop" width="310"/> 

### Add to Cart
<img src="https://github.com/ceacaiosifclaudiu/Food-Store---React-Native/assets/110819428/df3cc186-e5db-425a-9206-f5b8f288e54a" alt="BasicShop" width="310"/>

### Remove from Cart
<img src="https://github.com/ceacaiosifclaudiu/Food-Store---React-Native/assets/110819428/7ab85eaf-2ff3-43f4-8da5-848e066b7e33" alt="BasicShop" width="310"/>

### Place Order
<img src="https://github.com/ceacaiosifclaudiu/Food-Store---React-Native/assets/110819428/cf2d1c2a-ba91-436d-bbe5-d090326cf810" alt="BasicShop" width="310"/>

### Add to Favorites
<img src="https://github.com/ceacaiosifclaudiu/Food-Store---React-Native/assets/110819428/9431d853-f817-479d-aa69-4d69937678ff" alt="BasicShop" width="310"/>

## Contributing
Contributions are welcome! If you find any bugs or have suggestions for new features, please open an issue or submit a pull request.
