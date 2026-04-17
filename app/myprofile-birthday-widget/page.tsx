import MyProfileBirthdayWidgetWebComponent from "@/components/MyProfileBirthdayWidgetWebComponent";

export default async function BirthdayWidgetPage() {
  return (
    <div className="bg-white flex flex-col gap-y-6 items-center justify-center min-h-screen py-2">
      <h1 className="prose-heading-2xl text-center text-primary">
        Porsche Birthday Widget
      </h1>

      <div>
        <div className="flex flex-col gap-y-4 items-center">
          <p className="text-center text-primary prose-text-md">
            &quot;myprofile-birthday-widget&quot; is 👇🏻.
          </p>
          <div className="bg-primary p-4 rounded-md">
            <MyProfileBirthdayWidgetWebComponent
              token={
                "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IlRubnBmU2ozbzl0MnhtXzJLRl82cyJ9.eyJjaWFtSWQiOiJnbmlnaHg5eGFleWF1NHRnIiwicG9yc2NoZV9qdGkiOiJiYjU1YTRjN2M0ODY0ODAyNGIwYjYwZGY0YTU4NmMxNyIsImlzcyI6Imh0dHBzOi8vaWRlbnRpdHkucG9yc2NoZS1wcmV2aWV3LmNvbS8iLCJzdWIiOiJhdXRoMHw2OTMxNWNlZWIxMzA5OWU5MDA2ZGFjMzUiLCJhdWQiOlsiaHR0cHM6Ly9hcGkucG9yc2NoZS1wcmV2aWV3LmNvbSIsImh0dHBzOi8vcG9yc2NoZS1kZXZlbG9wbWVudC5wb3JzY2hlLWRldmVsb3BtZW50LmF1dGgwYXBwLmNvbS91c2VyaW5mbyJdLCJpYXQiOjE3NzY0MzEzMzMsImV4cCI6MTc3NjQzNDkzMywic2NvcGUiOiJvcGVuaWQgcHJvZmlsZSBlbWFpbCBwaWQ6dXNlcl9wcm9maWxlLnBob25lczp3cml0ZSBwaWQ6dXNlcl9wcm9maWxlLmRlYWxlcnM6cmVhZCBwaWQ6dXNlcl9wcm9maWxlLmNvbXBsZXRpb25fcmF0ZTpyZWFkIHBpZDp1c2VyX3Byb2ZpbGUucG9vOnJlYWQgcGlkOnVzZXJfcHJvZmlsZS5hZGRyZXNzZXM6d3JpdGUgcGlkOnVzZXJfcHJvZmlsZS5iaXJ0aGRhdGU6d3JpdGUgcGlkOnVzZXJfcHJvZmlsZS5wb3JzY2hlaWQ6cmVhZCBwaWQ6dXNlcl9wcm9maWxlLnRlcm1pbmF0ZWRfdmVoaWNsZXM6cmVhZCBwaWQ6dXNlcl9wcm9maWxlLmFkZHJlc3NlczpyZWFkIHBpZDp1c2VyX3Byb2ZpbGUubmFtZTpyZWFkIHBpZDp1c2VyX3Byb2ZpbGUucGhvbmVzOnJlYWQgcGlkOnVzZXJfcHJvZmlsZS5lbWFpbHM6cmVhZCBwaWQ6dXNlcl9wcm9maWxlLmxlZ2FsOnJlYWQgcGlkOnVzZXJfcHJvZmlsZS52ZWhpY2xlczpyZWFkIHBpZDp1c2VyX3Byb2ZpbGUuYmlydGhkYXRlOnJlYWQgcGlkOnVzZXJfcHJvZmlsZS5pZGVudGl0eV92ZXJpZmljYXRpb246cmVhZCBwaWQ6dXNlcl9wcm9maWxlLmxvY2FsZTpyZWFkIHBpZDp1c2VyX3Byb2ZpbGUucGhvbmVzOmRlbGV0ZSBwaWQ6dXNlcl9wcm9maWxlLmFkZHJlc3NlczpkZWxldGUiLCJhenAiOiJMZkJtWDdLb1djOWMxem5UVTh0eHhTTDF3R2xad2NUaiJ9.H9PWoc8vbQZCX32BCxWSZBg0_XSII1bPRCiBTwcmXKltXhkP6QAEt7xx6ziqeLkuLlMsaVTu1Gn1uxQiQpuOwCyPZIclN72BpNrj1gGhz0lK5C6eHS4VEqRdMcQb8fNpsbHKmrBZUP8z5x73EDinkbgXRwsO9khtFqByMjMZIuPH79WODtfTOXFanySpjNvx2AMQlTEE5xhKQdqvTLT6_YDXW8t26BQbv7CV-8m8eFoj6ethJ9lZYlDMoJck0HfVvFEGL-JMY5jdE8IgjPnE3qM-ZvNuYZ3RC421TX1KIzRZtJAUC0HG2WUA0ZftoThLjOt1FSy9oOMW2qE5RLXI9w"
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
