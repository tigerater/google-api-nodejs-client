// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import {
  OAuth2Client,
  JWT,
  Compute,
  UserRefreshClient,
} from 'google-auth-library';
import {
  GoogleConfigurable,
  createAPIRequest,
  MethodOptions,
  GlobalOptions,
  BodyResponseCallback,
  APIRequestContext,
} from 'googleapis-common';
import {GaxiosPromise} from 'gaxios';

// tslint:disable: no-any
// tslint:disable: class-name
// tslint:disable: variable-name
// tslint:disable: jsdoc-format
// tslint:disable: no-namespace

export namespace servicebroker_v1alpha1 {
  export interface Options extends GlobalOptions {
    version: 'v1alpha1';
  }

  interface StandardParameters {
    /**
     * V1 error format.
     */
    '$.xgafv'?: string;
    /**
     * OAuth access token.
     */
    access_token?: string;
    /**
     * Data format for response.
     */
    alt?: string;
    /**
     * JSONP
     */
    callback?: string;
    /**
     * Selector specifying which fields to include in a partial response.
     */
    fields?: string;
    /**
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     */
    key?: string;
    /**
     * OAuth 2.0 token for the current user.
     */
    oauth_token?: string;
    /**
     * Returns response with indentations and line breaks.
     */
    prettyPrint?: boolean;
    /**
     * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
     */
    quotaUser?: string;
    /**
     * Legacy upload protocol for media (e.g. "media", "multipart").
     */
    uploadType?: string;
    /**
     * Upload protocol for media (e.g. "raw", "multipart").
     */
    upload_protocol?: string;
  }

  /**
   * Service Broker API
   *
   * The Google Cloud Platform Service Broker API provides Google hosted implementation of the Open Service Broker API (https://www.openservicebrokerapi.org/).
   *
   * @example
   * const {google} = require('googleapis');
   * const servicebroker = google.servicebroker('v1alpha1');
   *
   * @namespace servicebroker
   * @type {Function}
   * @version v1alpha1
   * @variation v1alpha1
   * @param {object=} options Options for Servicebroker
   */
  export class Servicebroker {
    context: APIRequestContext;
    projects: Resource$Projects;
    v1alpha1: Resource$V1alpha1;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.projects = new Resource$Projects(this.context);
      this.v1alpha1 = new Resource$V1alpha1(this.context);
    }
  }

  /**
   * Describes the binding.
   */
  export interface Schema$GoogleCloudServicebrokerV1alpha1__Binding {
    /**
     * The id of the binding. Must be unique within GCP project. Maximum length is 64, GUID recommended. Required.
     */
    binding_id?: string | null;
    /**
     * A JSON object that contains data for platform resources associated with the binding to be created.
     */
    bind_resource?: {[key: string]: any} | null;
    /**
     * Output only. Timestamp for when the binding was created.
     */
    createTime?: string | null;
    /**
     * Configuration options for the service binding.
     */
    parameters?: {[key: string]: any} | null;
    /**
     * The ID of the plan. See `Service` and `Plan` resources for details. Maximum length is 64, GUID recommended. Required.
     */
    plan_id?: string | null;
    /**
     * The id of the service. Must be a valid identifier of a service contained in the list from a `ListServices()` call. Maximum length is 64, GUID recommended. Required.
     */
    service_id?: string | null;
  }
  /**
   * Response for the `CreateBinding()` method.
   */
  export interface Schema$GoogleCloudServicebrokerV1alpha1__CreateBindingResponse {
    /**
     * Credentials to use the binding.
     */
    credentials?: {[key: string]: any} | null;
    /**
     * Used to communicate description of the response. Usually for non-standard error codes. https://github.com/openservicebrokerapi/servicebroker/blob/master/spec.md#service-broker-errors
     */
    description?: string | null;
    /**
     * If broker executes operation asynchronously, this is the operation ID that can be polled to check the completion status of said operation. This broker always executes all create/delete operations asynchronously.
     */
    operation?: string | null;
    /**
     * A URL to which the platform may proxy requests for the address sent with bind_resource.route
     */
    route_service_url?: string | null;
    /**
     * From where to read system logs.
     */
    syslog_drain_url?: string | null;
    /**
     * An array of configuration for mounting volumes.
     */
    volume_mounts?: Array<{[key: string]: any}> | null;
  }
  /**
   * Response for the `CreateServiceInstance()` method.
   */
  export interface Schema$GoogleCloudServicebrokerV1alpha1__CreateServiceInstanceResponse {
    /**
     * Used to communicate description of the response. Usually for non-standard error codes. https://github.com/openservicebrokerapi/servicebroker/blob/master/spec.md#service-broker-errors
     */
    description?: string | null;
    /**
     * If broker executes operation asynchronously, this is the operation ID that can be polled to check the completion status of said operation. This broker always will return a non-empty operation on success.
     */
    operation?: string | null;
  }
  /**
   * Message containing information required to activate Dashboard SSO feature.
   */
  export interface Schema$GoogleCloudServicebrokerV1alpha1__DashboardClient {
    /**
     * The id of the Oauth client that the dashboard will use.
     */
    id?: string | null;
    /**
     * A URI for the service dashboard. Validated by the OAuth token server when the dashboard requests a token.
     */
    redirect_uri?: string | null;
    /**
     * A secret for the dashboard client.
     */
    secret?: string | null;
  }
  /**
   * Response for the `DeleteBinding()` method.
   */
  export interface Schema$GoogleCloudServicebrokerV1alpha1__DeleteBindingResponse {
    /**
     * Used to communicate description of the response. Usually for non-standard error codes. https://github.com/openservicebrokerapi/servicebroker/blob/master/spec.md#service-broker-errors
     */
    description?: string | null;
    /**
     * If broker executes operation asynchronously, this is the operation ID that can be polled to check the completion status of said operation.
     */
    operation?: string | null;
  }
  /**
   * Response for the `DeleteServiceInstance()` method.
   */
  export interface Schema$GoogleCloudServicebrokerV1alpha1__DeleteServiceInstanceResponse {
    /**
     * Used to communicate description of the response. Usually for non-standard error codes. https://github.com/openservicebrokerapi/servicebroker/blob/master/spec.md#service-broker-errors
     */
    description?: string | null;
    /**
     * If broker executes operation asynchronously, this is the operation ID that can be polled to check the completion status of said operation.
     */
    operation?: string | null;
  }
  /**
   * Response for the `GetBinding()` method.
   */
  export interface Schema$GoogleCloudServicebrokerV1alpha1__GetBindingResponse {
    /**
     * Credentials to use the binding.
     */
    credentials?: {[key: string]: any} | null;
    /**
     * Used to communicate description of the response. Usually for non-standard error codes. https://github.com/openservicebrokerapi/servicebroker/blob/master/spec.md#service-broker-errors
     */
    description?: string | null;
    /**
     * A URL to which the platform may proxy requests for the address sent with bind_resource.route
     */
    route_service_url?: string | null;
    /**
     * From where to read system logs.
     */
    syslog_drain_url?: string | null;
    /**
     * An array of configuration for mounting volumes.
     */
    volume_mounts?: Array<{[key: string]: any}> | null;
  }
  /**
   * The response for the `ListBindings()` method.
   */
  export interface Schema$GoogleCloudServicebrokerV1alpha1__ListBindingsResponse {
    /**
     * The list of the bindings in the instance.
     */
    bindings?: Schema$GoogleCloudServicebrokerV1alpha1__Binding[];
    /**
     * Used to communicate description of the response. Usually for non-standard error codes. https://github.com/openservicebrokerapi/servicebroker/blob/master/spec.md#service-broker-errors
     */
    description?: string | null;
    /**
     * This token allows you to get the next page of results for list requests. If the number of results is larger than `pageSize`, use the `nextPageToken` as a value for the query parameter `pageToken` in the next list request. Subsequent list requests will have their own `nextPageToken` to continue paging through the results
     */
    nextPageToken?: string | null;
  }
  /**
   * Response message for the `ListCatalog()` method.
   */
  export interface Schema$GoogleCloudServicebrokerV1alpha1__ListCatalogResponse {
    /**
     * Used to communicate description of the response. Usually for non-standard error codes. https://github.com/openservicebrokerapi/servicebroker/blob/master/spec.md#service-broker-errors
     */
    description?: string | null;
    /**
     * This token allows you to get the next page of results for list requests. If the number of results is larger than `pageSize`, use the `nextPageToken` as a value for the query parameter `pageToken` in the next list request. Subsequent list requests will have their own `nextPageToken` to continue paging through the results
     */
    nextPageToken?: string | null;
    /**
     * The services available for the requested GCP project.
     */
    services?: Schema$GoogleCloudServicebrokerV1alpha1__Service[];
  }
  /**
   * The response for the `ListServiceInstances()` method.
   */
  export interface Schema$GoogleCloudServicebrokerV1alpha1__ListServiceInstancesResponse {
    /**
     * Used to communicate description of the response. Usually for non-standard error codes. https://github.com/openservicebrokerapi/servicebroker/blob/master/spec.md#service-broker-errors
     */
    description?: string | null;
    /**
     * The list of the instances in the broker.
     */
    instances?: Schema$GoogleCloudServicebrokerV1alpha1__ServiceInstance[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results is larger than `pageSize`, use the `nextPageToken` as a value for the query parameter `pageToken` in the next list request. Subsequent list requests will have their own `nextPageToken` to continue paging through the results
     */
    nextPageToken?: string | null;
  }
  /**
   * Describes a long running operation, which conforms to OpenService API.
   */
  export interface Schema$GoogleCloudServicebrokerV1alpha1__Operation {
    /**
     * Optional description of the Operation state.
     */
    description?: string | null;
    /**
     * The state of the operation. Valid values are: &quot;in progress&quot;, &quot;succeeded&quot;, and &quot;failed&quot;.
     */
    state?: string | null;
  }
  /**
   * Plan message describes a Service Plan.
   */
  export interface Schema$GoogleCloudServicebrokerV1alpha1__Plan {
    /**
     * Specifies whether instances of the service can be bound to applications. If not specified, `Service.bindable` will be presumed.
     */
    bindable?: boolean | null;
    /**
     * Textual description of the plan. Optional.
     */
    description?: string | null;
    /**
     * Whether the service is free.
     */
    free?: boolean | null;
    /**
     * ID is a globally unique identifier used to uniquely identify the plan. User must make no presumption about the format of this field.
     */
    id?: string | null;
    /**
     * A list of metadata for a service offering. Metadata is an arbitrary JSON object.
     */
    metadata?: {[key: string]: any} | null;
    /**
     * User friendly name of the plan. The name must be globally unique within GCP project. Note, which is different from (&quot;This must be globally unique within a platform marketplace&quot;).
     */
    name?: string | null;
    /**
     * Schema definitions for service instances and bindings for the plan.
     */
    schemas?: {[key: string]: any} | null;
  }
  /**
   * The resource model mostly follows the Open Service Broker API, as described here: https://github.com/openservicebrokerapi/servicebroker/blob/master/_spec.md Though due to Google Specifics it has additional optional fields.
   */
  export interface Schema$GoogleCloudServicebrokerV1alpha1__Service {
    /**
     * Specifies whether instances of the service can be bound to applications. Required.
     */
    bindable?: boolean | null;
    /**
     * Whether the service provides an endpoint to get service bindings.
     */
    binding_retrievable?: boolean | null;
    /**
     * Information to activate Dashboard SSO feature.
     */
    dashboard_client?: Schema$GoogleCloudServicebrokerV1alpha1__DashboardClient;
    /**
     * Textual description of the service. Required.
     */
    description?: string | null;
    /**
     * ID is a globally unique identifier used to uniquely identify the service. ID is an opaque string.
     */
    id?: string | null;
    /**
     * Whether the service provides an endpoint to get service instances.
     */
    instance_retrievable?: boolean | null;
    /**
     * A list of metadata for a service offering. Metadata is an arbitrary JSON object.
     */
    metadata?: {[key: string]: any} | null;
    /**
     * User friendly service name. Name must match [a-z0-9]+ regexp. The name must be globally unique within GCP project. Note, which is different from (&quot;This must be globally unique within a platform marketplace&quot;). Required.
     */
    name?: string | null;
    /**
     * A list of plans for this service. At least one plan is required.
     */
    plans?: Schema$GoogleCloudServicebrokerV1alpha1__Plan[];
    /**
     * Whether the service supports upgrade/downgrade for some plans.
     */
    plan_updateable?: boolean | null;
    /**
     * Tags provide a flexible mechanism to expose a classification, attribute, or base technology of a service.
     */
    tags?: string[] | null;
  }
  /**
   * Message describing inputs to Provision and Update Service instance requests.
   */
  export interface Schema$GoogleCloudServicebrokerV1alpha1__ServiceInstance {
    /**
     * Platform specific contextual information under which the service instance is to be provisioned. This replaces organization_guid and space_guid. But can also contain anything. Currently only used for logging context information.
     */
    context?: {[key: string]: any} | null;
    /**
     * Output only. Timestamp for when the instance was created.
     */
    createTime?: string | null;
    /**
     * Output only. Name of the Deployment Manager deployment used for provisioning of this service instance.
     */
    deploymentName?: string | null;
    /**
     * The id of the service instance. Must be unique within GCP project. Maximum length is 64, GUID recommended. Required.
     */
    instance_id?: string | null;
    /**
     * The platform GUID for the organization under which the service is to be provisioned. Required.
     */
    organization_guid?: string | null;
    /**
     * Configuration options for the service instance. Parameters is JSON object serialized to string.
     */
    parameters?: {[key: string]: any} | null;
    /**
     * The ID of the plan. See `Service` and `Plan` resources for details. Maximum length is 64, GUID recommended. Required.
     */
    plan_id?: string | null;
    /**
     * Used only in UpdateServiceInstance request to optionally specify previous fields.
     */
    previous_values?: {[key: string]: any} | null;
    /**
     * Output only. The resource name of the instance, e.g. projects/project_id/brokers/broker_id/service_instances/instance_id
     */
    resourceName?: string | null;
    /**
     * The id of the service. Must be a valid identifier of a service contained in the list from a `ListServices()` call. Maximum length is 64, GUID recommended. Required.
     */
    service_id?: string | null;
    /**
     * The identifier for the project space within the platform organization. Required.
     */
    space_guid?: string | null;
  }
  /**
   * Response for the `UpdateServiceInstance()` method.
   */
  export interface Schema$GoogleCloudServicebrokerV1alpha1__UpdateServiceInstanceResponse {
    /**
     * Used to communicate description of the response. Usually for non-standard error codes. https://github.com/openservicebrokerapi/servicebroker/blob/master/spec.md#service-broker-errors
     */
    description?: string | null;
    /**
     * If broker executes operation asynchronously, this is the operation ID that can be polled to check the completion status of said operation.
     */
    operation?: string | null;
  }
  /**
   * Associates `members` with a `role`.
   */
  export interface Schema$GoogleIamV1__Binding {
    /**
     * The condition that is associated with this binding. NOTE: An unsatisfied condition will not allow user access via current binding. Different bindings, including their conditions, are examined independently.
     */
    condition?: Schema$GoogleType__Expr;
    /**
     * Specifies the identities requesting access for a Cloud Platform resource. `members` can have the following values:  * `allUsers`: A special identifier that represents anyone who is    on the internet; with or without a Google account.  * `allAuthenticatedUsers`: A special identifier that represents anyone    who is authenticated with a Google account or a service account.  * `user:{emailid}`: An email address that represents a specific Google    account. For example, `alice@example.com` .   * `serviceAccount:{emailid}`: An email address that represents a service    account. For example, `my-other-app@appspot.gserviceaccount.com`.  * `group:{emailid}`: An email address that represents a Google group.    For example, `admins@example.com`.  * `deleted:user:{emailid}?uid={uniqueid}`: An email address (plus unique    identifier) representing a user that has been recently deleted. For    example, `alice@example.com?uid=123456789012345678901`. If the user is    recovered, this value reverts to `user:{emailid}` and the recovered user    retains the role in the binding.  * `deleted:serviceAccount:{emailid}?uid={uniqueid}`: An email address (plus    unique identifier) representing a service account that has been recently    deleted. For example,    `my-other-app@appspot.gserviceaccount.com?uid=123456789012345678901`.    If the service account is undeleted, this value reverts to    `serviceAccount:{emailid}` and the undeleted service account retains the    role in the binding.  * `deleted:group:{emailid}?uid={uniqueid}`: An email address (plus unique    identifier) representing a Google group that has been recently    deleted. For example, `admins@example.com?uid=123456789012345678901`. If    the group is recovered, this value reverts to `group:{emailid}` and the    recovered group retains the role in the binding.   * `domain:{domain}`: The G Suite domain (primary) that represents all the    users of that domain. For example, `google.com` or `example.com`.
     */
    members?: string[] | null;
    /**
     * Role that is assigned to `members`. For example, `roles/viewer`, `roles/editor`, or `roles/owner`.
     */
    role?: string | null;
  }
  /**
   * An Identity and Access Management (IAM) policy, which specifies access controls for Google Cloud resources.   A `Policy` is a collection of `bindings`. A `binding` binds one or more `members` to a single `role`. Members can be user accounts, service accounts, Google groups, and domains (such as G Suite). A `role` is a named list of permissions; each `role` can be an IAM predefined role or a user-created custom role.  Optionally, a `binding` can specify a `condition`, which is a logical expression that allows access to a resource only if the expression evaluates to `true`. A condition can add constraints based on attributes of the request, the resource, or both.  **JSON example:**      {       &quot;bindings&quot;: [         {           &quot;role&quot;: &quot;roles/resourcemanager.organizationAdmin&quot;,           &quot;members&quot;: [             &quot;user:mike@example.com&quot;,             &quot;group:admins@example.com&quot;,             &quot;domain:google.com&quot;,             &quot;serviceAccount:my-project-id@appspot.gserviceaccount.com&quot;           ]         },         {           &quot;role&quot;: &quot;roles/resourcemanager.organizationViewer&quot;,           &quot;members&quot;: [&quot;user:eve@example.com&quot;],           &quot;condition&quot;: {             &quot;title&quot;: &quot;expirable access&quot;,             &quot;description&quot;: &quot;Does not grant access after Sep 2020&quot;,             &quot;expression&quot;: &quot;request.time &lt; timestamp(&#39;2020-10-01T00:00:00.000Z&#39;)&quot;,           }         }       ],       &quot;etag&quot;: &quot;BwWWja0YfJA=&quot;,       &quot;version&quot;: 3     }  **YAML example:**      bindings:     - members:       - user:mike@example.com       - group:admins@example.com       - domain:google.com       - serviceAccount:my-project-id@appspot.gserviceaccount.com       role: roles/resourcemanager.organizationAdmin     - members:       - user:eve@example.com       role: roles/resourcemanager.organizationViewer       condition:         title: expirable access         description: Does not grant access after Sep 2020         expression: request.time &lt; timestamp(&#39;2020-10-01T00:00:00.000Z&#39;)     - etag: BwWWja0YfJA=     - version: 3  For a description of IAM and its features, see the [IAM documentation](https://cloud.google.com/iam/docs/).
   */
  export interface Schema$GoogleIamV1__Policy {
    /**
     * Associates a list of `members` to a `role`. Optionally, may specify a `condition` that determines how and when the `bindings` are applied. Each of the `bindings` must contain at least one member.
     */
    bindings?: Schema$GoogleIamV1__Binding[];
    /**
     * `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform policy updates in order to avoid race conditions: An `etag` is returned in the response to `getIamPolicy`, and systems are expected to put that etag in the request to `setIamPolicy` to ensure that their change will be applied to the same version of the policy.  **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost.
     */
    etag?: string | null;
    /**
     * Specifies the format of the policy.  Valid values are `0`, `1`, and `3`. Requests that specify an invalid value are rejected.  Any operation that affects conditional role bindings must specify version `3`. This requirement applies to the following operations:  * Getting a policy that includes a conditional role binding * Adding a conditional role binding to a policy * Changing a conditional role binding in a policy * Removing any role binding, with or without a condition, from a policy   that includes conditions  **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost.  If a policy does not include any conditions, operations on that policy may specify any valid version or leave the field unset.
     */
    version?: number | null;
  }
  /**
   * Request message for `SetIamPolicy` method.
   */
  export interface Schema$GoogleIamV1__SetIamPolicyRequest {
    /**
     * REQUIRED: The complete policy to be applied to the `resource`. The size of the policy is limited to a few 10s of KB. An empty policy is a valid policy but certain Cloud Platform services (such as Projects) might reject them.
     */
    policy?: Schema$GoogleIamV1__Policy;
  }
  /**
   * Request message for `TestIamPermissions` method.
   */
  export interface Schema$GoogleIamV1__TestIamPermissionsRequest {
    /**
     * The set of permissions to check for the `resource`. Permissions with wildcards (such as &#39;*&#39; or &#39;storage.*&#39;) are not allowed. For more information see [IAM Overview](https://cloud.google.com/iam/docs/overview#permissions).
     */
    permissions?: string[] | null;
  }
  /**
   * Response message for `TestIamPermissions` method.
   */
  export interface Schema$GoogleIamV1__TestIamPermissionsResponse {
    /**
     * A subset of `TestPermissionsRequest.permissions` that the caller is allowed.
     */
    permissions?: string[] | null;
  }
  /**
   * Represents an expression text. Example:      title: &quot;User account presence&quot;     description: &quot;Determines whether the request has a user account&quot;     expression: &quot;size(request.user) &gt; 0&quot;
   */
  export interface Schema$GoogleType__Expr {
    /**
     * An optional description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI.
     */
    description?: string | null;
    /**
     * Textual representation of an expression in Common Expression Language syntax.  The application context of the containing message determines which well-known feature set of CEL is supported.
     */
    expression?: string | null;
    /**
     * An optional string indicating the location of the expression for error reporting, e.g. a file name and a position in the file.
     */
    location?: string | null;
    /**
     * An optional title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.
     */
    title?: string | null;
  }

  export class Resource$Projects {
    context: APIRequestContext;
    brokers: Resource$Projects$Brokers;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.brokers = new Resource$Projects$Brokers(this.context);
    }
  }

  export class Resource$Projects$Brokers {
    context: APIRequestContext;
    instances: Resource$Projects$Brokers$Instances;
    service_instances: Resource$Projects$Brokers$Service_instances;
    v2: Resource$Projects$Brokers$V2;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.instances = new Resource$Projects$Brokers$Instances(this.context);
      this.service_instances = new Resource$Projects$Brokers$Service_instances(
        this.context
      );
      this.v2 = new Resource$Projects$Brokers$V2(this.context);
    }
  }

  export class Resource$Projects$Brokers$Instances {
    context: APIRequestContext;
    service_bindings: Resource$Projects$Brokers$Instances$Service_bindings;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.service_bindings = new Resource$Projects$Brokers$Instances$Service_bindings(
        this.context
      );
    }

    /**
     * servicebroker.projects.brokers.instances.get
     * @desc Gets the given service instance from the system. This API is an extension and not part of the OSB spec. Hence the path is a standard Google API URL.
     * @alias servicebroker.projects.brokers.instances.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The resource name of the instance to return.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Projects$Brokers$Instances$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudServicebrokerV1alpha1__ServiceInstance>;
    get(
      params: Params$Resource$Projects$Brokers$Instances$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<
            Schema$GoogleCloudServicebrokerV1alpha1__ServiceInstance
          >,
      callback: BodyResponseCallback<
        Schema$GoogleCloudServicebrokerV1alpha1__ServiceInstance
      >
    ): void;
    get(
      params: Params$Resource$Projects$Brokers$Instances$Get,
      callback: BodyResponseCallback<
        Schema$GoogleCloudServicebrokerV1alpha1__ServiceInstance
      >
    ): void;
    get(
      callback: BodyResponseCallback<
        Schema$GoogleCloudServicebrokerV1alpha1__ServiceInstance
      >
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Brokers$Instances$Get
        | BodyResponseCallback<
            Schema$GoogleCloudServicebrokerV1alpha1__ServiceInstance
          >,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<
            Schema$GoogleCloudServicebrokerV1alpha1__ServiceInstance
          >,
      callback?: BodyResponseCallback<
        Schema$GoogleCloudServicebrokerV1alpha1__ServiceInstance
      >
    ): void | GaxiosPromise<
      Schema$GoogleCloudServicebrokerV1alpha1__ServiceInstance
    > {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Brokers$Instances$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Brokers$Instances$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://servicebroker.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<
          Schema$GoogleCloudServicebrokerV1alpha1__ServiceInstance
        >(parameters, callback);
      } else {
        return createAPIRequest<
          Schema$GoogleCloudServicebrokerV1alpha1__ServiceInstance
        >(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Brokers$Instances$Get
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The resource name of the instance to return.
     */
    name?: string;
  }

  export class Resource$Projects$Brokers$Instances$Service_bindings {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * servicebroker.projects.brokers.instances.service_bindings.list
     * @desc Lists all the bindings in the instance
     * @alias servicebroker.projects.brokers.instances.service_bindings.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.pageSize Specifies the number of results to return per page. If there are fewer elements than the specified number, returns all elements. Optional. If unset or 0, all the results will be returned.
     * @param {string=} params.pageToken Specifies a page token to use. Set `pageToken` to a `nextPageToken` returned by a previous list request to get the next page of results.
     * @param {string} params.parent Parent must match `projects/[PROJECT_ID]/brokers/[BROKER_ID]/instances/[INSTANCE_ID]`.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Projects$Brokers$Instances$Service_bindings$List,
      options?: MethodOptions
    ): GaxiosPromise<
      Schema$GoogleCloudServicebrokerV1alpha1__ListBindingsResponse
    >;
    list(
      params: Params$Resource$Projects$Brokers$Instances$Service_bindings$List,
      options:
        | MethodOptions
        | BodyResponseCallback<
            Schema$GoogleCloudServicebrokerV1alpha1__ListBindingsResponse
          >,
      callback: BodyResponseCallback<
        Schema$GoogleCloudServicebrokerV1alpha1__ListBindingsResponse
      >
    ): void;
    list(
      params: Params$Resource$Projects$Brokers$Instances$Service_bindings$List,
      callback: BodyResponseCallback<
        Schema$GoogleCloudServicebrokerV1alpha1__ListBindingsResponse
      >
    ): void;
    list(
      callback: BodyResponseCallback<
        Schema$GoogleCloudServicebrokerV1alpha1__ListBindingsResponse
      >
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Brokers$Instances$Service_bindings$List
        | BodyResponseCallback<
            Schema$GoogleCloudServicebrokerV1alpha1__ListBindingsResponse
          >,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<
            Schema$GoogleCloudServicebrokerV1alpha1__ListBindingsResponse
          >,
      callback?: BodyResponseCallback<
        Schema$GoogleCloudServicebrokerV1alpha1__ListBindingsResponse
      >
    ): void | GaxiosPromise<
      Schema$GoogleCloudServicebrokerV1alpha1__ListBindingsResponse
    > {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Brokers$Instances$Service_bindings$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Brokers$Instances$Service_bindings$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://servicebroker.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/{+parent}/service_bindings').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<
          Schema$GoogleCloudServicebrokerV1alpha1__ListBindingsResponse
        >(parameters, callback);
      } else {
        return createAPIRequest<
          Schema$GoogleCloudServicebrokerV1alpha1__ListBindingsResponse
        >(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Brokers$Instances$Service_bindings$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Specifies the number of results to return per page. If there are fewer elements than the specified number, returns all elements. Optional. If unset or 0, all the results will be returned.
     */
    pageSize?: number;
    /**
     * Specifies a page token to use. Set `pageToken` to a `nextPageToken` returned by a previous list request to get the next page of results.
     */
    pageToken?: string;
    /**
     * Parent must match `projects/[PROJECT_ID]/brokers/[BROKER_ID]/instances/[INSTANCE_ID]`.
     */
    parent?: string;
  }

  export class Resource$Projects$Brokers$Service_instances {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * servicebroker.projects.brokers.service_instances.list
     * @desc Lists all the instances in the brokers This API is an extension and not part of the OSB spec. Hence the path is a standard Google API URL.
     * @alias servicebroker.projects.brokers.service_instances.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.pageSize Specifies the number of results to return per page. If there are fewer elements than the specified number, returns all elements. Optional. If unset or 0, all the results will be returned.
     * @param {string=} params.pageToken Specifies a page token to use. Set `pageToken` to a `nextPageToken` returned by a previous list request to get the next page of results.
     * @param {string} params.parent Parent must match `projects/[PROJECT_ID]/brokers/[BROKER_ID]`.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Projects$Brokers$Service_instances$List,
      options?: MethodOptions
    ): GaxiosPromise<
      Schema$GoogleCloudServicebrokerV1alpha1__ListServiceInstancesResponse
    >;
    list(
      params: Params$Resource$Projects$Brokers$Service_instances$List,
      options:
        | MethodOptions
        | BodyResponseCallback<
            Schema$GoogleCloudServicebrokerV1alpha1__ListServiceInstancesResponse
          >,
      callback: BodyResponseCallback<
        Schema$GoogleCloudServicebrokerV1alpha1__ListServiceInstancesResponse
      >
    ): void;
    list(
      params: Params$Resource$Projects$Brokers$Service_instances$List,
      callback: BodyResponseCallback<
        Schema$GoogleCloudServicebrokerV1alpha1__ListServiceInstancesResponse
      >
    ): void;
    list(
      callback: BodyResponseCallback<
        Schema$GoogleCloudServicebrokerV1alpha1__ListServiceInstancesResponse
      >
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Brokers$Service_instances$List
        | BodyResponseCallback<
            Schema$GoogleCloudServicebrokerV1alpha1__ListServiceInstancesResponse
          >,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<
            Schema$GoogleCloudServicebrokerV1alpha1__ListServiceInstancesResponse
          >,
      callback?: BodyResponseCallback<
        Schema$GoogleCloudServicebrokerV1alpha1__ListServiceInstancesResponse
      >
    ): void | GaxiosPromise<
      Schema$GoogleCloudServicebrokerV1alpha1__ListServiceInstancesResponse
    > {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Brokers$Service_instances$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Brokers$Service_instances$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://servicebroker.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/{+parent}/service_instances').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<
          Schema$GoogleCloudServicebrokerV1alpha1__ListServiceInstancesResponse
        >(parameters, callback);
      } else {
        return createAPIRequest<
          Schema$GoogleCloudServicebrokerV1alpha1__ListServiceInstancesResponse
        >(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Brokers$Service_instances$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Specifies the number of results to return per page. If there are fewer elements than the specified number, returns all elements. Optional. If unset or 0, all the results will be returned.
     */
    pageSize?: number;
    /**
     * Specifies a page token to use. Set `pageToken` to a `nextPageToken` returned by a previous list request to get the next page of results.
     */
    pageToken?: string;
    /**
     * Parent must match `projects/[PROJECT_ID]/brokers/[BROKER_ID]`.
     */
    parent?: string;
  }

  export class Resource$Projects$Brokers$V2 {
    context: APIRequestContext;
    catalog: Resource$Projects$Brokers$V2$Catalog;
    service_instances: Resource$Projects$Brokers$V2$Service_instances;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.catalog = new Resource$Projects$Brokers$V2$Catalog(this.context);
      this.service_instances = new Resource$Projects$Brokers$V2$Service_instances(
        this.context
      );
    }
  }

  export class Resource$Projects$Brokers$V2$Catalog {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * servicebroker.projects.brokers.v2.catalog.list
     * @desc Lists all the Services registered with this broker for consumption for given service registry broker, which contains an set of services. Note, that Service producer API is separate from Broker API.
     * @alias servicebroker.projects.brokers.v2.catalog.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.pageSize Specifies the number of results to return per page. If there are fewer elements than the specified number, returns all elements. Optional. If unset or 0, all the results will be returned.
     * @param {string=} params.pageToken Specifies a page token to use. Set `pageToken` to a `nextPageToken` returned by a previous list request to get the next page of results.
     * @param {string} params.parent Parent must match `projects/[PROJECT_ID]/brokers/[BROKER_ID]`.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Projects$Brokers$V2$Catalog$List,
      options?: MethodOptions
    ): GaxiosPromise<
      Schema$GoogleCloudServicebrokerV1alpha1__ListCatalogResponse
    >;
    list(
      params: Params$Resource$Projects$Brokers$V2$Catalog$List,
      options:
        | MethodOptions
        | BodyResponseCallback<
            Schema$GoogleCloudServicebrokerV1alpha1__ListCatalogResponse
          >,
      callback: BodyResponseCallback<
        Schema$GoogleCloudServicebrokerV1alpha1__ListCatalogResponse
      >
    ): void;
    list(
      params: Params$Resource$Projects$Brokers$V2$Catalog$List,
      callback: BodyResponseCallback<
        Schema$GoogleCloudServicebrokerV1alpha1__ListCatalogResponse
      >
    ): void;
    list(
      callback: BodyResponseCallback<
        Schema$GoogleCloudServicebrokerV1alpha1__ListCatalogResponse
      >
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Brokers$V2$Catalog$List
        | BodyResponseCallback<
            Schema$GoogleCloudServicebrokerV1alpha1__ListCatalogResponse
          >,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<
            Schema$GoogleCloudServicebrokerV1alpha1__ListCatalogResponse
          >,
      callback?: BodyResponseCallback<
        Schema$GoogleCloudServicebrokerV1alpha1__ListCatalogResponse
      >
    ): void | GaxiosPromise<
      Schema$GoogleCloudServicebrokerV1alpha1__ListCatalogResponse
    > {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Brokers$V2$Catalog$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Brokers$V2$Catalog$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://servicebroker.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/{+parent}/v2/catalog').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<
          Schema$GoogleCloudServicebrokerV1alpha1__ListCatalogResponse
        >(parameters, callback);
      } else {
        return createAPIRequest<
          Schema$GoogleCloudServicebrokerV1alpha1__ListCatalogResponse
        >(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Brokers$V2$Catalog$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Specifies the number of results to return per page. If there are fewer elements than the specified number, returns all elements. Optional. If unset or 0, all the results will be returned.
     */
    pageSize?: number;
    /**
     * Specifies a page token to use. Set `pageToken` to a `nextPageToken` returned by a previous list request to get the next page of results.
     */
    pageToken?: string;
    /**
     * Parent must match `projects/[PROJECT_ID]/brokers/[BROKER_ID]`.
     */
    parent?: string;
  }

  export class Resource$Projects$Brokers$V2$Service_instances {
    context: APIRequestContext;
    service_bindings: Resource$Projects$Brokers$V2$Service_instances$Service_bindings;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.service_bindings = new Resource$Projects$Brokers$V2$Service_instances$Service_bindings(
        this.context
      );
    }

    /**
     * servicebroker.projects.brokers.v2.service_instances.create
     * @desc Provisions a service instance. If `request.accepts_incomplete` is false and Broker cannot execute request synchronously HTTP 422 error will be returned along with FAILED_PRECONDITION status. If `request.accepts_incomplete` is true and the Broker decides to execute resource asynchronously then HTTP 202 response code will be returned and a valid polling operation in the response will be included. If Broker executes the request synchronously and it succeeds HTTP 201 response will be furnished. If identical instance exists, then HTTP 200 response will be returned. If an instance with identical ID but mismatching parameters exists, then HTTP 409 status code will be returned.
     * @alias servicebroker.projects.brokers.v2.service_instances.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {boolean=} params.acceptsIncomplete Value indicating that API client supports asynchronous operations. If Broker cannot execute the request synchronously HTTP 422 code will be returned to HTTP clients along with FAILED_PRECONDITION error. If true and broker will execute request asynchronously 202 HTTP code will be returned. This broker always requires this to be true as all mutator operations are asynchronous.
     * @param {string} params.instance_id The id of the service instance. Must be unique within GCP project. Maximum length is 64, GUID recommended. Required.
     * @param {string} params.parent Parent must match `projects/[PROJECT_ID]/brokers/[BROKER_ID]`.
     * @param {().GoogleCloudServicebrokerV1alpha1__ServiceInstance} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
      params?: Params$Resource$Projects$Brokers$V2$Service_instances$Create,
      options?: MethodOptions
    ): GaxiosPromise<
      Schema$GoogleCloudServicebrokerV1alpha1__CreateServiceInstanceResponse
    >;
    create(
      params: Params$Resource$Projects$Brokers$V2$Service_instances$Create,
      options:
        | MethodOptions
        | BodyResponseCallback<
            Schema$GoogleCloudServicebrokerV1alpha1__CreateServiceInstanceResponse
          >,
      callback: BodyResponseCallback<
        Schema$GoogleCloudServicebrokerV1alpha1__CreateServiceInstanceResponse
      >
    ): void;
    create(
      params: Params$Resource$Projects$Brokers$V2$Service_instances$Create,
      callback: BodyResponseCallback<
        Schema$GoogleCloudServicebrokerV1alpha1__CreateServiceInstanceResponse
      >
    ): void;
    create(
      callback: BodyResponseCallback<
        Schema$GoogleCloudServicebrokerV1alpha1__CreateServiceInstanceResponse
      >
    ): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Brokers$V2$Service_instances$Create
        | BodyResponseCallback<
            Schema$GoogleCloudServicebrokerV1alpha1__CreateServiceInstanceResponse
          >,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<
            Schema$GoogleCloudServicebrokerV1alpha1__CreateServiceInstanceResponse
          >,
      callback?: BodyResponseCallback<
        Schema$GoogleCloudServicebrokerV1alpha1__CreateServiceInstanceResponse
      >
    ): void | GaxiosPromise<
      Schema$GoogleCloudServicebrokerV1alpha1__CreateServiceInstanceResponse
    > {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Brokers$V2$Service_instances$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Brokers$V2$Service_instances$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://servicebroker.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/v1alpha1/{+parent}/v2/service_instances/{+instance_id}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT',
          },
          options
        ),
        params,
        requiredParams: ['parent', 'instance_id'],
        pathParams: ['instance_id', 'parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<
          Schema$GoogleCloudServicebrokerV1alpha1__CreateServiceInstanceResponse
        >(parameters, callback);
      } else {
        return createAPIRequest<
          Schema$GoogleCloudServicebrokerV1alpha1__CreateServiceInstanceResponse
        >(parameters);
      }
    }

    /**
     * servicebroker.projects.brokers.v2.service_instances.delete
     * @desc Deprovisions a service instance. For synchronous/asynchronous request details see CreateServiceInstance method. If service instance does not exist HTTP 410 status will be returned.
     * @alias servicebroker.projects.brokers.v2.service_instances.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {boolean=} params.acceptsIncomplete See CreateServiceInstanceRequest for details.
     * @param {string} params.instanceId The instance id to deprovision.
     * @param {string} params.parent Parent must match `projects/[PROJECT_ID]/brokers/[BROKER_ID]`.
     * @param {string=} params.planId The plan id of the service instance.
     * @param {string=} params.serviceId The service id of the service instance.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params?: Params$Resource$Projects$Brokers$V2$Service_instances$Delete,
      options?: MethodOptions
    ): GaxiosPromise<
      Schema$GoogleCloudServicebrokerV1alpha1__DeleteServiceInstanceResponse
    >;
    delete(
      params: Params$Resource$Projects$Brokers$V2$Service_instances$Delete,
      options:
        | MethodOptions
        | BodyResponseCallback<
            Schema$GoogleCloudServicebrokerV1alpha1__DeleteServiceInstanceResponse
          >,
      callback: BodyResponseCallback<
        Schema$GoogleCloudServicebrokerV1alpha1__DeleteServiceInstanceResponse
      >
    ): void;
    delete(
      params: Params$Resource$Projects$Brokers$V2$Service_instances$Delete,
      callback: BodyResponseCallback<
        Schema$GoogleCloudServicebrokerV1alpha1__DeleteServiceInstanceResponse
      >
    ): void;
    delete(
      callback: BodyResponseCallback<
        Schema$GoogleCloudServicebrokerV1alpha1__DeleteServiceInstanceResponse
      >
    ): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Brokers$V2$Service_instances$Delete
        | BodyResponseCallback<
            Schema$GoogleCloudServicebrokerV1alpha1__DeleteServiceInstanceResponse
          >,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<
            Schema$GoogleCloudServicebrokerV1alpha1__DeleteServiceInstanceResponse
          >,
      callback?: BodyResponseCallback<
        Schema$GoogleCloudServicebrokerV1alpha1__DeleteServiceInstanceResponse
      >
    ): void | GaxiosPromise<
      Schema$GoogleCloudServicebrokerV1alpha1__DeleteServiceInstanceResponse
    > {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Brokers$V2$Service_instances$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Brokers$V2$Service_instances$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://servicebroker.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1alpha1/{+parent}/v2/service_instances/{+instanceId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['parent', 'instanceId'],
        pathParams: ['instanceId', 'parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<
          Schema$GoogleCloudServicebrokerV1alpha1__DeleteServiceInstanceResponse
        >(parameters, callback);
      } else {
        return createAPIRequest<
          Schema$GoogleCloudServicebrokerV1alpha1__DeleteServiceInstanceResponse
        >(parameters);
      }
    }

    /**
     * servicebroker.projects.brokers.v2.service_instances.get
     * @desc Gets the given service instance from the system. This API is an extension and not part of the OSB spec. Hence the path is a standard Google API URL.
     * @alias servicebroker.projects.brokers.v2.service_instances.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The resource name of the instance to return.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Projects$Brokers$V2$Service_instances$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudServicebrokerV1alpha1__ServiceInstance>;
    get(
      params: Params$Resource$Projects$Brokers$V2$Service_instances$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<
            Schema$GoogleCloudServicebrokerV1alpha1__ServiceInstance
          >,
      callback: BodyResponseCallback<
        Schema$GoogleCloudServicebrokerV1alpha1__ServiceInstance
      >
    ): void;
    get(
      params: Params$Resource$Projects$Brokers$V2$Service_instances$Get,
      callback: BodyResponseCallback<
        Schema$GoogleCloudServicebrokerV1alpha1__ServiceInstance
      >
    ): void;
    get(
      callback: BodyResponseCallback<
        Schema$GoogleCloudServicebrokerV1alpha1__ServiceInstance
      >
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Brokers$V2$Service_instances$Get
        | BodyResponseCallback<
            Schema$GoogleCloudServicebrokerV1alpha1__ServiceInstance
          >,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<
            Schema$GoogleCloudServicebrokerV1alpha1__ServiceInstance
          >,
      callback?: BodyResponseCallback<
        Schema$GoogleCloudServicebrokerV1alpha1__ServiceInstance
      >
    ): void | GaxiosPromise<
      Schema$GoogleCloudServicebrokerV1alpha1__ServiceInstance
    > {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Brokers$V2$Service_instances$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Brokers$V2$Service_instances$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://servicebroker.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<
          Schema$GoogleCloudServicebrokerV1alpha1__ServiceInstance
        >(parameters, callback);
      } else {
        return createAPIRequest<
          Schema$GoogleCloudServicebrokerV1alpha1__ServiceInstance
        >(parameters);
      }
    }

    /**
     * servicebroker.projects.brokers.v2.service_instances.getLast_operation
     * @desc Returns the state of the last operation for the service instance. Only last (or current) operation can be polled.
     * @alias servicebroker.projects.brokers.v2.service_instances.getLast_operation
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.instanceId The instance id for which to return the last operation status.
     * @param {string=} params.operation If `operation` was returned during mutation operation, this field must be populated with the provided value.
     * @param {string} params.parent Parent must match `projects/[PROJECT_ID]/brokers/[BROKER_ID]`.
     * @param {string=} params.planId Plan id.
     * @param {string=} params.serviceId Service id.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    getLast_operation(
      params?: Params$Resource$Projects$Brokers$V2$Service_instances$Getlast_operation,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudServicebrokerV1alpha1__Operation>;
    getLast_operation(
      params: Params$Resource$Projects$Brokers$V2$Service_instances$Getlast_operation,
      options:
        | MethodOptions
        | BodyResponseCallback<
            Schema$GoogleCloudServicebrokerV1alpha1__Operation
          >,
      callback: BodyResponseCallback<
        Schema$GoogleCloudServicebrokerV1alpha1__Operation
      >
    ): void;
    getLast_operation(
      params: Params$Resource$Projects$Brokers$V2$Service_instances$Getlast_operation,
      callback: BodyResponseCallback<
        Schema$GoogleCloudServicebrokerV1alpha1__Operation
      >
    ): void;
    getLast_operation(
      callback: BodyResponseCallback<
        Schema$GoogleCloudServicebrokerV1alpha1__Operation
      >
    ): void;
    getLast_operation(
      paramsOrCallback?:
        | Params$Resource$Projects$Brokers$V2$Service_instances$Getlast_operation
        | BodyResponseCallback<
            Schema$GoogleCloudServicebrokerV1alpha1__Operation
          >,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<
            Schema$GoogleCloudServicebrokerV1alpha1__Operation
          >,
      callback?: BodyResponseCallback<
        Schema$GoogleCloudServicebrokerV1alpha1__Operation
      >
    ): void | GaxiosPromise<
      Schema$GoogleCloudServicebrokerV1alpha1__Operation
    > {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Brokers$V2$Service_instances$Getlast_operation;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Brokers$V2$Service_instances$Getlast_operation;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://servicebroker.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/v1alpha1/{+parent}/v2/service_instances/{+instanceId}/last_operation'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['parent', 'instanceId'],
        pathParams: ['instanceId', 'parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudServicebrokerV1alpha1__Operation>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<
          Schema$GoogleCloudServicebrokerV1alpha1__Operation
        >(parameters);
      }
    }

    /**
     * servicebroker.projects.brokers.v2.service_instances.patch
     * @desc Updates an existing service instance. See CreateServiceInstance for possible response codes.
     * @alias servicebroker.projects.brokers.v2.service_instances.patch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {boolean=} params.acceptsIncomplete See CreateServiceInstanceRequest for details.
     * @param {string} params.instance_id The id of the service instance. Must be unique within GCP project. Maximum length is 64, GUID recommended. Required.
     * @param {string} params.parent Parent must match `projects/[PROJECT_ID]/brokers/[BROKER_ID]`.
     * @param {().GoogleCloudServicebrokerV1alpha1__ServiceInstance} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch(
      params?: Params$Resource$Projects$Brokers$V2$Service_instances$Patch,
      options?: MethodOptions
    ): GaxiosPromise<
      Schema$GoogleCloudServicebrokerV1alpha1__UpdateServiceInstanceResponse
    >;
    patch(
      params: Params$Resource$Projects$Brokers$V2$Service_instances$Patch,
      options:
        | MethodOptions
        | BodyResponseCallback<
            Schema$GoogleCloudServicebrokerV1alpha1__UpdateServiceInstanceResponse
          >,
      callback: BodyResponseCallback<
        Schema$GoogleCloudServicebrokerV1alpha1__UpdateServiceInstanceResponse
      >
    ): void;
    patch(
      params: Params$Resource$Projects$Brokers$V2$Service_instances$Patch,
      callback: BodyResponseCallback<
        Schema$GoogleCloudServicebrokerV1alpha1__UpdateServiceInstanceResponse
      >
    ): void;
    patch(
      callback: BodyResponseCallback<
        Schema$GoogleCloudServicebrokerV1alpha1__UpdateServiceInstanceResponse
      >
    ): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Brokers$V2$Service_instances$Patch
        | BodyResponseCallback<
            Schema$GoogleCloudServicebrokerV1alpha1__UpdateServiceInstanceResponse
          >,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<
            Schema$GoogleCloudServicebrokerV1alpha1__UpdateServiceInstanceResponse
          >,
      callback?: BodyResponseCallback<
        Schema$GoogleCloudServicebrokerV1alpha1__UpdateServiceInstanceResponse
      >
    ): void | GaxiosPromise<
      Schema$GoogleCloudServicebrokerV1alpha1__UpdateServiceInstanceResponse
    > {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Brokers$V2$Service_instances$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Brokers$V2$Service_instances$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://servicebroker.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/v1alpha1/{+parent}/v2/service_instances/{+instance_id}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
          },
          options
        ),
        params,
        requiredParams: ['parent', 'instance_id'],
        pathParams: ['instance_id', 'parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<
          Schema$GoogleCloudServicebrokerV1alpha1__UpdateServiceInstanceResponse
        >(parameters, callback);
      } else {
        return createAPIRequest<
          Schema$GoogleCloudServicebrokerV1alpha1__UpdateServiceInstanceResponse
        >(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Brokers$V2$Service_instances$Create
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Value indicating that API client supports asynchronous operations. If Broker cannot execute the request synchronously HTTP 422 code will be returned to HTTP clients along with FAILED_PRECONDITION error. If true and broker will execute request asynchronously 202 HTTP code will be returned. This broker always requires this to be true as all mutator operations are asynchronous.
     */
    acceptsIncomplete?: boolean;
    /**
     * The id of the service instance. Must be unique within GCP project. Maximum length is 64, GUID recommended. Required.
     */
    instance_id?: string;
    /**
     * Parent must match `projects/[PROJECT_ID]/brokers/[BROKER_ID]`.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudServicebrokerV1alpha1__ServiceInstance;
  }
  export interface Params$Resource$Projects$Brokers$V2$Service_instances$Delete
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * See CreateServiceInstanceRequest for details.
     */
    acceptsIncomplete?: boolean;
    /**
     * The instance id to deprovision.
     */
    instanceId?: string;
    /**
     * Parent must match `projects/[PROJECT_ID]/brokers/[BROKER_ID]`.
     */
    parent?: string;
    /**
     * The plan id of the service instance.
     */
    planId?: string;
    /**
     * The service id of the service instance.
     */
    serviceId?: string;
  }
  export interface Params$Resource$Projects$Brokers$V2$Service_instances$Get
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The resource name of the instance to return.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Brokers$V2$Service_instances$Getlast_operation
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The instance id for which to return the last operation status.
     */
    instanceId?: string;
    /**
     * If `operation` was returned during mutation operation, this field must be populated with the provided value.
     */
    operation?: string;
    /**
     * Parent must match `projects/[PROJECT_ID]/brokers/[BROKER_ID]`.
     */
    parent?: string;
    /**
     * Plan id.
     */
    planId?: string;
    /**
     * Service id.
     */
    serviceId?: string;
  }
  export interface Params$Resource$Projects$Brokers$V2$Service_instances$Patch
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * See CreateServiceInstanceRequest for details.
     */
    acceptsIncomplete?: boolean;
    /**
     * The id of the service instance. Must be unique within GCP project. Maximum length is 64, GUID recommended. Required.
     */
    instance_id?: string;
    /**
     * Parent must match `projects/[PROJECT_ID]/brokers/[BROKER_ID]`.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudServicebrokerV1alpha1__ServiceInstance;
  }

  export class Resource$Projects$Brokers$V2$Service_instances$Service_bindings {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * servicebroker.projects.brokers.v2.service_instances.service_bindings.create
     * @desc CreateBinding generates a service binding to an existing service instance. See ProviServiceInstance for async operation details.
     * @alias servicebroker.projects.brokers.v2.service_instances.service_bindings.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {boolean=} params.acceptsIncomplete See CreateServiceInstanceRequest for details.
     * @param {string} params.binding_id The id of the binding. Must be unique within GCP project. Maximum length is 64, GUID recommended. Required.
     * @param {string} params.instanceId The service instance to which to bind.
     * @param {string} params.parent The GCP container. Must match `projects/[PROJECT_ID]/brokers/[BROKER_ID]`.
     * @param {().GoogleCloudServicebrokerV1alpha1__Binding} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
      params?: Params$Resource$Projects$Brokers$V2$Service_instances$Service_bindings$Create,
      options?: MethodOptions
    ): GaxiosPromise<
      Schema$GoogleCloudServicebrokerV1alpha1__CreateBindingResponse
    >;
    create(
      params: Params$Resource$Projects$Brokers$V2$Service_instances$Service_bindings$Create,
      options:
        | MethodOptions
        | BodyResponseCallback<
            Schema$GoogleCloudServicebrokerV1alpha1__CreateBindingResponse
          >,
      callback: BodyResponseCallback<
        Schema$GoogleCloudServicebrokerV1alpha1__CreateBindingResponse
      >
    ): void;
    create(
      params: Params$Resource$Projects$Brokers$V2$Service_instances$Service_bindings$Create,
      callback: BodyResponseCallback<
        Schema$GoogleCloudServicebrokerV1alpha1__CreateBindingResponse
      >
    ): void;
    create(
      callback: BodyResponseCallback<
        Schema$GoogleCloudServicebrokerV1alpha1__CreateBindingResponse
      >
    ): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Brokers$V2$Service_instances$Service_bindings$Create
        | BodyResponseCallback<
            Schema$GoogleCloudServicebrokerV1alpha1__CreateBindingResponse
          >,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<
            Schema$GoogleCloudServicebrokerV1alpha1__CreateBindingResponse
          >,
      callback?: BodyResponseCallback<
        Schema$GoogleCloudServicebrokerV1alpha1__CreateBindingResponse
      >
    ): void | GaxiosPromise<
      Schema$GoogleCloudServicebrokerV1alpha1__CreateBindingResponse
    > {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Brokers$V2$Service_instances$Service_bindings$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Brokers$V2$Service_instances$Service_bindings$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://servicebroker.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/v1alpha1/{+parent}/v2/service_instances/{+instanceId}/service_bindings/{+binding_id}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT',
          },
          options
        ),
        params,
        requiredParams: ['parent', 'instanceId', 'binding_id'],
        pathParams: ['binding_id', 'instanceId', 'parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<
          Schema$GoogleCloudServicebrokerV1alpha1__CreateBindingResponse
        >(parameters, callback);
      } else {
        return createAPIRequest<
          Schema$GoogleCloudServicebrokerV1alpha1__CreateBindingResponse
        >(parameters);
      }
    }

    /**
     * servicebroker.projects.brokers.v2.service_instances.service_bindings.delete
     * @desc Unbinds from a service instance. For synchronous/asynchronous request details see CreateServiceInstance method. If binding does not exist HTTP 410 status will be returned.
     * @alias servicebroker.projects.brokers.v2.service_instances.service_bindings.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {boolean=} params.acceptsIncomplete See CreateServiceInstanceRequest for details.
     * @param {string} params.bindingId The id of the binding to delete.
     * @param {string} params.instanceId The service instance id that deleted binding is bound to.
     * @param {string} params.parent Parent must match `projects/[PROJECT_ID]/brokers/[BROKER_ID]`.
     * @param {string=} params.planId The plan id of the service instance.
     * @param {string=} params.serviceId Additional query parameter hints. The service id of the service instance.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params?: Params$Resource$Projects$Brokers$V2$Service_instances$Service_bindings$Delete,
      options?: MethodOptions
    ): GaxiosPromise<
      Schema$GoogleCloudServicebrokerV1alpha1__DeleteBindingResponse
    >;
    delete(
      params: Params$Resource$Projects$Brokers$V2$Service_instances$Service_bindings$Delete,
      options:
        | MethodOptions
        | BodyResponseCallback<
            Schema$GoogleCloudServicebrokerV1alpha1__DeleteBindingResponse
          >,
      callback: BodyResponseCallback<
        Schema$GoogleCloudServicebrokerV1alpha1__DeleteBindingResponse
      >
    ): void;
    delete(
      params: Params$Resource$Projects$Brokers$V2$Service_instances$Service_bindings$Delete,
      callback: BodyResponseCallback<
        Schema$GoogleCloudServicebrokerV1alpha1__DeleteBindingResponse
      >
    ): void;
    delete(
      callback: BodyResponseCallback<
        Schema$GoogleCloudServicebrokerV1alpha1__DeleteBindingResponse
      >
    ): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Brokers$V2$Service_instances$Service_bindings$Delete
        | BodyResponseCallback<
            Schema$GoogleCloudServicebrokerV1alpha1__DeleteBindingResponse
          >,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<
            Schema$GoogleCloudServicebrokerV1alpha1__DeleteBindingResponse
          >,
      callback?: BodyResponseCallback<
        Schema$GoogleCloudServicebrokerV1alpha1__DeleteBindingResponse
      >
    ): void | GaxiosPromise<
      Schema$GoogleCloudServicebrokerV1alpha1__DeleteBindingResponse
    > {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Brokers$V2$Service_instances$Service_bindings$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Brokers$V2$Service_instances$Service_bindings$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://servicebroker.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/v1alpha1/{+parent}/v2/service_instances/{instanceId}/service_bindings/{bindingId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['parent', 'instanceId', 'bindingId'],
        pathParams: ['bindingId', 'instanceId', 'parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<
          Schema$GoogleCloudServicebrokerV1alpha1__DeleteBindingResponse
        >(parameters, callback);
      } else {
        return createAPIRequest<
          Schema$GoogleCloudServicebrokerV1alpha1__DeleteBindingResponse
        >(parameters);
      }
    }

    /**
     * servicebroker.projects.brokers.v2.service_instances.service_bindings.get
     * @desc GetBinding returns the binding information.
     * @alias servicebroker.projects.brokers.v2.service_instances.service_bindings.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.bindingId The binding id.
     * @param {string} params.instanceId Instance id to which the binding is bound.
     * @param {string} params.parent Parent must match `projects/[PROJECT_ID]/brokers/[BROKER_ID]`.
     * @param {string=} params.planId Plan id.
     * @param {string=} params.serviceId Service id.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Projects$Brokers$V2$Service_instances$Service_bindings$Get,
      options?: MethodOptions
    ): GaxiosPromise<
      Schema$GoogleCloudServicebrokerV1alpha1__GetBindingResponse
    >;
    get(
      params: Params$Resource$Projects$Brokers$V2$Service_instances$Service_bindings$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<
            Schema$GoogleCloudServicebrokerV1alpha1__GetBindingResponse
          >,
      callback: BodyResponseCallback<
        Schema$GoogleCloudServicebrokerV1alpha1__GetBindingResponse
      >
    ): void;
    get(
      params: Params$Resource$Projects$Brokers$V2$Service_instances$Service_bindings$Get,
      callback: BodyResponseCallback<
        Schema$GoogleCloudServicebrokerV1alpha1__GetBindingResponse
      >
    ): void;
    get(
      callback: BodyResponseCallback<
        Schema$GoogleCloudServicebrokerV1alpha1__GetBindingResponse
      >
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Brokers$V2$Service_instances$Service_bindings$Get
        | BodyResponseCallback<
            Schema$GoogleCloudServicebrokerV1alpha1__GetBindingResponse
          >,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<
            Schema$GoogleCloudServicebrokerV1alpha1__GetBindingResponse
          >,
      callback?: BodyResponseCallback<
        Schema$GoogleCloudServicebrokerV1alpha1__GetBindingResponse
      >
    ): void | GaxiosPromise<
      Schema$GoogleCloudServicebrokerV1alpha1__GetBindingResponse
    > {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Brokers$V2$Service_instances$Service_bindings$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Brokers$V2$Service_instances$Service_bindings$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://servicebroker.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/v1alpha1/{+parent}/v2/service_instances/{+instanceId}/service_bindings/{+bindingId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['parent', 'instanceId', 'bindingId'],
        pathParams: ['bindingId', 'instanceId', 'parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<
          Schema$GoogleCloudServicebrokerV1alpha1__GetBindingResponse
        >(parameters, callback);
      } else {
        return createAPIRequest<
          Schema$GoogleCloudServicebrokerV1alpha1__GetBindingResponse
        >(parameters);
      }
    }

    /**
     * servicebroker.projects.brokers.v2.service_instances.service_bindings.getLast_operation
     * @desc Returns the state of the last operation for the binding. Only last (or current) operation can be polled.
     * @alias servicebroker.projects.brokers.v2.service_instances.service_bindings.getLast_operation
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.bindingId The binding id for which to return the last operation
     * @param {string} params.instanceId The instance id that the binding is bound to.
     * @param {string=} params.operation If `operation` was returned during mutation operation, this field must be populated with the provided value.
     * @param {string} params.parent Parent must match `projects/[PROJECT_ID]/brokers/[BROKER_ID]`.
     * @param {string=} params.planId Plan id.
     * @param {string=} params.serviceId Service id.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    getLast_operation(
      params?: Params$Resource$Projects$Brokers$V2$Service_instances$Service_bindings$Getlast_operation,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudServicebrokerV1alpha1__Operation>;
    getLast_operation(
      params: Params$Resource$Projects$Brokers$V2$Service_instances$Service_bindings$Getlast_operation,
      options:
        | MethodOptions
        | BodyResponseCallback<
            Schema$GoogleCloudServicebrokerV1alpha1__Operation
          >,
      callback: BodyResponseCallback<
        Schema$GoogleCloudServicebrokerV1alpha1__Operation
      >
    ): void;
    getLast_operation(
      params: Params$Resource$Projects$Brokers$V2$Service_instances$Service_bindings$Getlast_operation,
      callback: BodyResponseCallback<
        Schema$GoogleCloudServicebrokerV1alpha1__Operation
      >
    ): void;
    getLast_operation(
      callback: BodyResponseCallback<
        Schema$GoogleCloudServicebrokerV1alpha1__Operation
      >
    ): void;
    getLast_operation(
      paramsOrCallback?:
        | Params$Resource$Projects$Brokers$V2$Service_instances$Service_bindings$Getlast_operation
        | BodyResponseCallback<
            Schema$GoogleCloudServicebrokerV1alpha1__Operation
          >,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<
            Schema$GoogleCloudServicebrokerV1alpha1__Operation
          >,
      callback?: BodyResponseCallback<
        Schema$GoogleCloudServicebrokerV1alpha1__Operation
      >
    ): void | GaxiosPromise<
      Schema$GoogleCloudServicebrokerV1alpha1__Operation
    > {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Brokers$V2$Service_instances$Service_bindings$Getlast_operation;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Brokers$V2$Service_instances$Service_bindings$Getlast_operation;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://servicebroker.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/v1alpha1/{+parent}/v2/service_instances/{+instanceId}/service_bindings/{+bindingId}/last_operation'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['parent', 'instanceId', 'bindingId'],
        pathParams: ['bindingId', 'instanceId', 'parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudServicebrokerV1alpha1__Operation>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<
          Schema$GoogleCloudServicebrokerV1alpha1__Operation
        >(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Brokers$V2$Service_instances$Service_bindings$Create
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * See CreateServiceInstanceRequest for details.
     */
    acceptsIncomplete?: boolean;
    /**
     * The id of the binding. Must be unique within GCP project. Maximum length is 64, GUID recommended. Required.
     */
    binding_id?: string;
    /**
     * The service instance to which to bind.
     */
    instanceId?: string;
    /**
     * The GCP container. Must match `projects/[PROJECT_ID]/brokers/[BROKER_ID]`.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudServicebrokerV1alpha1__Binding;
  }
  export interface Params$Resource$Projects$Brokers$V2$Service_instances$Service_bindings$Delete
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * See CreateServiceInstanceRequest for details.
     */
    acceptsIncomplete?: boolean;
    /**
     * The id of the binding to delete.
     */
    bindingId?: string;
    /**
     * The service instance id that deleted binding is bound to.
     */
    instanceId?: string;
    /**
     * Parent must match `projects/[PROJECT_ID]/brokers/[BROKER_ID]`.
     */
    parent?: string;
    /**
     * The plan id of the service instance.
     */
    planId?: string;
    /**
     * Additional query parameter hints. The service id of the service instance.
     */
    serviceId?: string;
  }
  export interface Params$Resource$Projects$Brokers$V2$Service_instances$Service_bindings$Get
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The binding id.
     */
    bindingId?: string;
    /**
     * Instance id to which the binding is bound.
     */
    instanceId?: string;
    /**
     * Parent must match `projects/[PROJECT_ID]/brokers/[BROKER_ID]`.
     */
    parent?: string;
    /**
     * Plan id.
     */
    planId?: string;
    /**
     * Service id.
     */
    serviceId?: string;
  }
  export interface Params$Resource$Projects$Brokers$V2$Service_instances$Service_bindings$Getlast_operation
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The binding id for which to return the last operation
     */
    bindingId?: string;
    /**
     * The instance id that the binding is bound to.
     */
    instanceId?: string;
    /**
     * If `operation` was returned during mutation operation, this field must be populated with the provided value.
     */
    operation?: string;
    /**
     * Parent must match `projects/[PROJECT_ID]/brokers/[BROKER_ID]`.
     */
    parent?: string;
    /**
     * Plan id.
     */
    planId?: string;
    /**
     * Service id.
     */
    serviceId?: string;
  }

  export class Resource$V1alpha1 {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * servicebroker.getIamPolicy
     * @desc Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @alias servicebroker.getIamPolicy
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.options.requestedPolicyVersion Optional. The policy format version to be returned.  Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected.  Requests for policies with any conditional bindings must specify version 3. Policies without any conditional bindings may specify any valid value or leave the field unset.
     * @param {string} params.resource_ REQUIRED: The resource for which the policy is being requested. See the operation documentation for the appropriate value for this field.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    getIamPolicy(
      params?: Params$Resource$V1alpha1$Getiampolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleIamV1__Policy>;
    getIamPolicy(
      params: Params$Resource$V1alpha1$Getiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$GoogleIamV1__Policy>,
      callback: BodyResponseCallback<Schema$GoogleIamV1__Policy>
    ): void;
    getIamPolicy(
      params: Params$Resource$V1alpha1$Getiampolicy,
      callback: BodyResponseCallback<Schema$GoogleIamV1__Policy>
    ): void;
    getIamPolicy(
      callback: BodyResponseCallback<Schema$GoogleIamV1__Policy>
    ): void;
    getIamPolicy(
      paramsOrCallback?:
        | Params$Resource$V1alpha1$Getiampolicy
        | BodyResponseCallback<Schema$GoogleIamV1__Policy>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleIamV1__Policy>,
      callback?: BodyResponseCallback<Schema$GoogleIamV1__Policy>
    ): void | GaxiosPromise<Schema$GoogleIamV1__Policy> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$V1alpha1$Getiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$V1alpha1$Getiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://servicebroker.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/{+resource}:getIamPolicy').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['resource'],
        pathParams: ['resource'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleIamV1__Policy>(parameters, callback);
      } else {
        return createAPIRequest<Schema$GoogleIamV1__Policy>(parameters);
      }
    }

    /**
     * servicebroker.setIamPolicy
     * @desc Sets the access control policy on the specified resource. Replaces any existing policy.  Can return Public Errors: NOT_FOUND, INVALID_ARGUMENT and PERMISSION_DENIED
     * @alias servicebroker.setIamPolicy
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.resource_ REQUIRED: The resource for which the policy is being specified. See the operation documentation for the appropriate value for this field.
     * @param {().GoogleIamV1__SetIamPolicyRequest} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    setIamPolicy(
      params?: Params$Resource$V1alpha1$Setiampolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleIamV1__Policy>;
    setIamPolicy(
      params: Params$Resource$V1alpha1$Setiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$GoogleIamV1__Policy>,
      callback: BodyResponseCallback<Schema$GoogleIamV1__Policy>
    ): void;
    setIamPolicy(
      params: Params$Resource$V1alpha1$Setiampolicy,
      callback: BodyResponseCallback<Schema$GoogleIamV1__Policy>
    ): void;
    setIamPolicy(
      callback: BodyResponseCallback<Schema$GoogleIamV1__Policy>
    ): void;
    setIamPolicy(
      paramsOrCallback?:
        | Params$Resource$V1alpha1$Setiampolicy
        | BodyResponseCallback<Schema$GoogleIamV1__Policy>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleIamV1__Policy>,
      callback?: BodyResponseCallback<Schema$GoogleIamV1__Policy>
    ): void | GaxiosPromise<Schema$GoogleIamV1__Policy> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$V1alpha1$Setiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$V1alpha1$Setiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://servicebroker.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/{+resource}:setIamPolicy').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['resource'],
        pathParams: ['resource'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleIamV1__Policy>(parameters, callback);
      } else {
        return createAPIRequest<Schema$GoogleIamV1__Policy>(parameters);
      }
    }

    /**
     * servicebroker.testIamPermissions
     * @desc Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.  Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     * @alias servicebroker.testIamPermissions
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.resource_ REQUIRED: The resource for which the policy detail is being requested. See the operation documentation for the appropriate value for this field.
     * @param {().GoogleIamV1__TestIamPermissionsRequest} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    testIamPermissions(
      params?: Params$Resource$V1alpha1$Testiampermissions,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleIamV1__TestIamPermissionsResponse>;
    testIamPermissions(
      params: Params$Resource$V1alpha1$Testiampermissions,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleIamV1__TestIamPermissionsResponse>,
      callback: BodyResponseCallback<
        Schema$GoogleIamV1__TestIamPermissionsResponse
      >
    ): void;
    testIamPermissions(
      params: Params$Resource$V1alpha1$Testiampermissions,
      callback: BodyResponseCallback<
        Schema$GoogleIamV1__TestIamPermissionsResponse
      >
    ): void;
    testIamPermissions(
      callback: BodyResponseCallback<
        Schema$GoogleIamV1__TestIamPermissionsResponse
      >
    ): void;
    testIamPermissions(
      paramsOrCallback?:
        | Params$Resource$V1alpha1$Testiampermissions
        | BodyResponseCallback<Schema$GoogleIamV1__TestIamPermissionsResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleIamV1__TestIamPermissionsResponse>,
      callback?: BodyResponseCallback<
        Schema$GoogleIamV1__TestIamPermissionsResponse
      >
    ): void | GaxiosPromise<Schema$GoogleIamV1__TestIamPermissionsResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$V1alpha1$Testiampermissions;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$V1alpha1$Testiampermissions;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://servicebroker.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/{+resource}:testIamPermissions').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['resource'],
        pathParams: ['resource'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleIamV1__TestIamPermissionsResponse>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$GoogleIamV1__TestIamPermissionsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$V1alpha1$Getiampolicy
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Optional. The policy format version to be returned.  Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected.  Requests for policies with any conditional bindings must specify version 3. Policies without any conditional bindings may specify any valid value or leave the field unset.
     */
    'options.requestedPolicyVersion'?: number;
    /**
     * REQUIRED: The resource for which the policy is being requested. See the operation documentation for the appropriate value for this field.
     */
    resource?: string;
  }
  export interface Params$Resource$V1alpha1$Setiampolicy
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * REQUIRED: The resource for which the policy is being specified. See the operation documentation for the appropriate value for this field.
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleIamV1__SetIamPolicyRequest;
  }
  export interface Params$Resource$V1alpha1$Testiampermissions
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * REQUIRED: The resource for which the policy detail is being requested. See the operation documentation for the appropriate value for this field.
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleIamV1__TestIamPermissionsRequest;
  }
}
