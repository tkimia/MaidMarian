# MaidMarian
A Spring+React demo and partial clone of Robinhood

## Setup
I've used gradle as the build tool here, so the only command that needs to run is

```
./gradlew bootRun
```

If you're getting a permissions related error, make sure to run

```
chmod +x gradlew
```

The program expects you to have your [IEX Cloud Public Token](https://iexcloud.io/console/tokens) as an environment variable named `IEX_KEY`.

Set it like this on mac
```
export IEX_KEY="'pk_12345678901234567890'"
```

Or like this on PC
```
$env:IEX_KEY=="'pk_12345678901234567890'"
```
