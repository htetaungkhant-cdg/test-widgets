import MyProfileBirthdayWidgetWebComponent from "@/components/MyProfileBirthdayWidgetWebComponent";

export default async function BirthdayWidgetPage() {
  return (
    <div className="bg-primary flex flex-col gap-y-6 items-center justify-center min-h-screen py-2">
      <h1 className="prose-heading-2xl text-center text-canvas">
        Porsche Birthday Widget
      </h1>

      <div>
        <div className="flex flex-col gap-y-4 items-center">
          <p className="text-center text-canvas prose-text-md">
            &quot;myprofile-birthday-widget&quot; is 👇🏻.
          </p>
          <div className="scheme-dark bg-canvas p-4 rounded-md">
            <MyProfileBirthdayWidgetWebComponent
              token={
                "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IlRubnBmU2ozbzl0MnhtXzJLRl82cyJ9.eyJjaWFtSWQiOiJnbmlnaHg5eGFleWF1NHRnIiwicG9yc2NoZV9qdGkiOiI1NzAzYzAwZTRmYjA0ZTVjYWJlMjhmOTE0NzhhOWRhNSIsImlzcyI6Imh0dHBzOi8vaWRlbnRpdHkucG9yc2NoZS1wcmV2aWV3LmNvbS8iLCJzdWIiOiJhdXRoMHw2OTMxNWNlZWIxMzA5OWU5MDA2ZGFjMzUiLCJhdWQiOlsiaHR0cHM6Ly9hcGkucG9yc2NoZS1wcmV2aWV3LmNvbSIsImh0dHBzOi8vcG9yc2NoZS1kZXZlbG9wbWVudC5wb3JzY2hlLWRldmVsb3BtZW50LmF1dGgwYXBwLmNvbS91c2VyaW5mbyJdLCJpYXQiOjE3NzY2ODk5NDAsImV4cCI6MTc3NjY5MzU0MCwic2NvcGUiOiJvcGVuaWQgcHJvZmlsZSBlbWFpbCBwaWQ6dXNlcl9wcm9maWxlLnBob25lczp3cml0ZSBwaWQ6dXNlcl9wcm9maWxlLmRlYWxlcnM6cmVhZCBwaWQ6dXNlcl9wcm9maWxlLmNvbXBsZXRpb25fcmF0ZTpyZWFkIHBpZDp1c2VyX3Byb2ZpbGUucG9vOnJlYWQgcGlkOnVzZXJfcHJvZmlsZS5hZGRyZXNzZXM6d3JpdGUgcGlkOnVzZXJfcHJvZmlsZS5iaXJ0aGRhdGU6d3JpdGUgcGlkOnVzZXJfcHJvZmlsZS5wb3JzY2hlaWQ6cmVhZCBwaWQ6dXNlcl9wcm9maWxlLnRlcm1pbmF0ZWRfdmVoaWNsZXM6cmVhZCBwaWQ6dXNlcl9wcm9maWxlLmFkZHJlc3NlczpyZWFkIHBpZDp1c2VyX3Byb2ZpbGUubmFtZTpyZWFkIHBpZDp1c2VyX3Byb2ZpbGUucGhvbmVzOnJlYWQgcGlkOnVzZXJfcHJvZmlsZS5lbWFpbHM6cmVhZCBwaWQ6dXNlcl9wcm9maWxlLmxlZ2FsOnJlYWQgcGlkOnVzZXJfcHJvZmlsZS52ZWhpY2xlczpyZWFkIHBpZDp1c2VyX3Byb2ZpbGUuYmlydGhkYXRlOnJlYWQgcGlkOnVzZXJfcHJvZmlsZS5pZGVudGl0eV92ZXJpZmljYXRpb246cmVhZCBwaWQ6dXNlcl9wcm9maWxlLmxvY2FsZTpyZWFkIHBpZDp1c2VyX3Byb2ZpbGUucGhvbmVzOmRlbGV0ZSBwaWQ6dXNlcl9wcm9maWxlLmFkZHJlc3NlczpkZWxldGUiLCJhenAiOiJMZkJtWDdLb1djOWMxem5UVTh0eHhTTDF3R2xad2NUaiJ9.RyYCY6pzMKye7wDHREjicFbWNrK62e5V_rGUcQtCJFu-22_DdCf_C8kLCXb66up_193N13LCpJeR_DP1MgBIxPqWm6Cm9FQc73yd7R7ygSK-wU3aPvWAXNfQc971O4rFKqawJBKfYUbg3B7KGSTzyKBdvPAXsIT4Sntxy7GfPnUkNi3FLILrld_bwxCBQKkDFOt7qX0wS9GHUAfUI8omCxQo6vT9CVawYk4m-kt_G_rSC2qW3mkdsXdau-i2lX9FmVSXB9gKS5vPqK9WoVooq7gWg4jQgdvFS-kPJESuXxeZWcnMlcMa1oE-HD116BtAY0yEXnSpQD8uRLawXesoCg"
              }
              country="SG"
              locale="en_GB"
              mode="EXTERNAL"
              environment="preview"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
