<?php

    return [

        'store_id' => env('SSLC_STORE_ID', 'your_store_id'),
        'store_password' => env('SSLC_STORE_PASSWORD', 'your_store_password'),
        'success_url' => env('SSLC_SUCCESS_URL', '/api/payment/success'),
        'fail_url' => env('SSLC_FAIL_URL', '/api/payment/fail'),
        'cancel_url' => env('SSLC_CANCEL_URL', '/api/payment/cancel'),
        'sandbox' => env('SSLC_SANDBOX', true),  // set to false in production

       // 'sandbox' => env('APP_DEBUG', true),



        'store' => [
            'id'          =>  env('SSLC_STORE_ID'),
            'password'    =>  env('SSLC_STORE_PASSWORD'),
            'currency'    =>  env('SSLC_STORE_CURRENCY'),
        ],



        'route' => [
            'success'   =>  env('SSLC_ROUTE_SUCCESS','sslc.success'),
            'failure'   =>  env('SSLC_ROUTE_FAILURE','sslc.failure'),
            'cancel'    =>  env('SSLC_ROUTE_CANCEL','sslc.cancel'),
            'ipn'       =>  env('SSLC_ROUTE_IPN','sslc.ipn'),
        ],


        'gateway'  => null,



        'product_profile' => 'general',



        'localhost' => env('SSLC_ALLOW_LOCALHOST',true),



        'path' => [
            'domain'    => [
                'sandbox'   => 'https://sandbox.sslcommerz.com',
                'live'      => 'https://securepay.sslcommerz.com'
            ],
            'endpoint'  => [
                'make_payment'          =>  '/gwprocess/v4/api.php',
                'transaction_status'    =>  '/validator/api/merchantTransIDvalidationAPI.php',
                'order_validate'        =>  '/validator/api/validationserverAPI.php',
                'refund_payment'        =>  '/validator/api/merchantTransIDvalidationAPI.php',
                'refund_status'         =>  '/validator/api/merchantTransIDvalidationAPI.php',
            ]
        ]
    ];
