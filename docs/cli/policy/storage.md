# Storage

Store the results of a `cloudquery policy run` invocation directly in the Postgres Database that holds the configuration data. This enables users to unlock more downstream workflows like monitoring security results in your favorite BI tool and alerting.

To enable storing the policy results:

1. Use the `--enable-db-persistence` flag when invoking

    ```bash
    cloudquery policy run <policy-name> --enable-db-persistence` 
    ```

2. Add a `policy` block to your existing cloudquery block in order to specify what to do with the policy results

    ```hcl
    cloudquery {
        policy {
            db_persistence = true
        }
    }
    ```

## Table Schema

All results are stored in the `cloudquery` schema within the postgres database.

### Table: `cloudquery.policy_executions`

Holds information about the source of the policy and high level metrics about the execution run

#### Columns

| Name        | Type           | Description  |
| ------------- | ------------- | -----  |
|`id`|`uuid`|Unique identifier for policy run|
|`timestamp`|`timestamp`|Timestamp at which the policy run began|
|`scheme`|`text`|URL scheme that defines from where the policy was loaded|
|`location`|`text`|Full path that defines from where the policy was loaded|
|`policy_name`|`text`|Name of the policy|
|`selector`|`text`|User defined path selector|
|`sha256_hash`|`text`|hash of the policy to be able to compare multiple versions of the same policy|
|`version`|`text`|Version identifier for the policy|
|`checks_total`|`int`|Number of checks that were run|
|`checks_failed`|`int`|Number of checks that failed|
|`checks_passed`|`int`|Number of checks that passed|

### Table: `cloudquery.check_results`

Holds information about the source of the policy and high level metrics about the execution run

#### Columns

| Name        | Type           | Description  |
| ------------- | ------------- | -----  |
|`execution_id`|`uuid`|(FK)|
|`execution_timestamp`|`timestamp`|Timestamp at which the check run began|
|`name`|`text`|Name of check|
|`selector`|`text`|Path that fully defines the check within a specific policy |
|`description`|`text`|Description of the check|
|`status`|`text`|Final status of the check|
|`raw_results`|`jsonb`|Raw output of the results returned by the check|
|`error`|`text`|Any errors that occurred during the execution of the check|
