import MyProfileAddressWidgetWebComponent from "@/components/MyProfileAddressWidgetWebComponent";

export default async function AddressWidgetPage() {
  return (
    <div className="bg-white flex flex-col gap-y-6 items-center justify-center min-h-screen py-2">
      <h1 className="prose-heading-2xl text-center text-primary">
        Porsche Address Widget
      </h1>

      <div>
        <div className="flex flex-col gap-y-4 items-center">
          <p className="text-center text-primary prose-text-md">
            &quot;myprofile-address-widget&quot; is 👇🏻.
          </p>
          <div className="bg-primary p-4 rounded-md">
            <MyProfileAddressWidgetWebComponent
              token={
                "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IlRubnBmU2ozbzl0MnhtXzJLRl82cyJ9.eyJjaWFtSWQiOiJnbmlnaHg5eGFleWF1NHRnIiwicG9yc2NoZV9qdGkiOiI2NTkyMDZlZDAyODg4ZjM3NjgyMGI5MzdjZDA2OTFmMCIsImlzcyI6Imh0dHBzOi8vaWRlbnRpdHkucG9yc2NoZS1wcmV2aWV3LmNvbS8iLCJzdWIiOiJhdXRoMHw2OTMxNWNlZWIxMzA5OWU5MDA2ZGFjMzUiLCJhdWQiOlsiaHR0cHM6Ly9hcGkucG9yc2NoZS1wcmV2aWV3LmNvbSIsImh0dHBzOi8vcG9yc2NoZS1kZXZlbG9wbWVudC5wb3JzY2hlLWRldmVsb3BtZW50LmF1dGgwYXBwLmNvbS91c2VyaW5mbyJdLCJpYXQiOjE3NzY0MzMwNDIsImV4cCI6MTc3NjQzNjY0Miwic2NvcGUiOiJvcGVuaWQgcHJvZmlsZSBlbWFpbCBwaWQ6dXNlcl9wcm9maWxlLnBob25lczp3cml0ZSBwaWQ6dXNlcl9wcm9maWxlLmRlYWxlcnM6cmVhZCBwaWQ6dXNlcl9wcm9maWxlLmNvbXBsZXRpb25fcmF0ZTpyZWFkIHBpZDp1c2VyX3Byb2ZpbGUucG9vOnJlYWQgcGlkOnVzZXJfcHJvZmlsZS5hZGRyZXNzZXM6d3JpdGUgcGlkOnVzZXJfcHJvZmlsZS5iaXJ0aGRhdGU6d3JpdGUgcGlkOnVzZXJfcHJvZmlsZS5wb3JzY2hlaWQ6cmVhZCBwaWQ6dXNlcl9wcm9maWxlLnRlcm1pbmF0ZWRfdmVoaWNsZXM6cmVhZCBwaWQ6dXNlcl9wcm9maWxlLmFkZHJlc3NlczpyZWFkIHBpZDp1c2VyX3Byb2ZpbGUubmFtZTpyZWFkIHBpZDp1c2VyX3Byb2ZpbGUucGhvbmVzOnJlYWQgcGlkOnVzZXJfcHJvZmlsZS5lbWFpbHM6cmVhZCBwaWQ6dXNlcl9wcm9maWxlLmxlZ2FsOnJlYWQgcGlkOnVzZXJfcHJvZmlsZS52ZWhpY2xlczpyZWFkIHBpZDp1c2VyX3Byb2ZpbGUuYmlydGhkYXRlOnJlYWQgcGlkOnVzZXJfcHJvZmlsZS5pZGVudGl0eV92ZXJpZmljYXRpb246cmVhZCBwaWQ6dXNlcl9wcm9maWxlLmxvY2FsZTpyZWFkIHBpZDp1c2VyX3Byb2ZpbGUucGhvbmVzOmRlbGV0ZSBwaWQ6dXNlcl9wcm9maWxlLmFkZHJlc3NlczpkZWxldGUiLCJhenAiOiJMZkJtWDdLb1djOWMxem5UVTh0eHhTTDF3R2xad2NUaiJ9.oNd7x862capDTZAOkiyDlS6XK8Hdhqw_Llz-ozGzebso3gHn325KcBDwARc1WxLHvCArjrn2LTWlgKgHfVn7gkHOw8wFICePKn8Oa5GbbTMDxgdUuHeIESu33zGTTs11aqlZRj6VhpuWkiuCftLKxGuU3HJWDgo-Iv8ZLJd1fAcm90Ht_blwef8bkfXKqQL-jnpEtpbydEI8vHkjAA6xGYxd01zb7XpukCZVDOwJtrexqurC-OAP7cp47ajSuDDTsZ531Apls3VTj2plWf7W9cAEld49sXpQ_D5xttN40t7Gfve91UPWS_9GV7dde2wHT_doM6B4HPpZoMzWnDB0bw"
              }
              country="SG"
              locale="en_GB"
              mode="CHECKOUT"
              environment="preview"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
