import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";

interface ProfileForm {
  fullName: string;
  email: string;
  phone: string;
  city: string;
  state: string;
}
interface PasswordForm {
  current: string;
  newPass: string;
  confirm: string;
}
interface NotifPrefs {
  emailBookings: boolean;
  emailReminders: boolean;
  smsNotifications: boolean;
  whatsappNotifications: boolean;
}

const inputStyle: React.CSSProperties = {
  background: "#ffffff",
  border: "1px solid var(--border-default)",
  color: "var(--text-primary)",
  borderRadius: "8px",
  height: "44px",
  padding: "0 14px",
  fontFamily: "var(--font-body)",
  fontSize: "14px",
  width: "100%",
  boxSizing: "border-box",
  outline: "none",
  transition: "border-color 150ms ease",
};
const labelStyle: React.CSSProperties = {
  fontFamily: "var(--font-body)",
  fontSize: "12px",
  fontWeight: 600,
  color: "var(--text-muted)",
  letterSpacing: "0.08em",
  textTransform: "uppercase",
  marginBottom: "6px",
  display: "block",
};
const cardStyle: React.CSSProperties = {
  background: "#ffffff",
  borderRadius: "16px",
  borderTop: "4px solid var(--green-primary)",
  boxShadow: "var(--card-shadow)",
  padding: "28px 32px",
  marginBottom: "24px",
};

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2
      style={{
        fontFamily: "var(--font-display)",
        fontStyle: "italic",
        fontSize: "20px",
        fontWeight: 600,
        color: "var(--green-dark)",
        margin: "0 0 20px",
        paddingBottom: "12px",
        borderBottom: "1px solid var(--border-subtle)",
      }}
    >
      {children}
    </h2>
  );
}

export function ProfilePage() {
  const [profile, setProfile] = useState<ProfileForm>({
    fullName: "Priya Sharma",
    email: "priya.sharma@gmail.com",
    phone: "+91 98765 43210",
    city: "Mumbai",
    state: "Maharashtra",
  });
  const [password, setPassword] = useState<PasswordForm>({
    current: "",
    newPass: "",
    confirm: "",
  });
  const [notifs, setNotifs] = useState<NotifPrefs>({
    emailBookings: true,
    emailReminders: true,
    smsNotifications: false,
    whatsappNotifications: true,
  });
  const [profileSaved, setProfileSaved] = useState(false);
  const [passwordSaved, setPasswordSaved] = useState(false);
  const [passwordError, setPasswordError] = useState("");

  function handleProfileChange(e: React.ChangeEvent<HTMLInputElement>) {
    setProfile((p) => ({ ...p, [e.target.name]: e.target.value }));
    setProfileSaved(false);
  }
  function handleProfileSave(e: React.FormEvent) {
    e.preventDefault();
    setProfileSaved(true);
    setTimeout(() => setProfileSaved(false), 3000);
  }
  function handlePasswordChange(e: React.ChangeEvent<HTMLInputElement>) {
    setPassword((p) => ({ ...p, [e.target.name]: e.target.value }));
    setPasswordError("");
  }
  function handlePasswordSave(e: React.FormEvent) {
    e.preventDefault();
    if (password.newPass !== password.confirm) {
      setPasswordError("New passwords do not match.");
      return;
    }
    if (password.newPass.length < 8) {
      setPasswordError("Password must be at least 8 characters.");
      return;
    }
    setPasswordSaved(true);
    setPassword({ current: "", newPass: "", confirm: "" });
    setTimeout(() => setPasswordSaved(false), 3000);
  }

  const initials = profile.fullName
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div
      style={{
        background: "var(--bg-surface)",
        minHeight: "100vh",
        paddingTop: "var(--nav-height, 72px)",
      }}
    >
      <div
        style={{
          background: "var(--green-dark)",
          padding: "40px clamp(20px, 4vw, 48px) 32px",
        }}
      >
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "11px",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.6)",
              marginBottom: "8px",
            }}
          >
            Dashboard
          </p>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontStyle: "italic",
              fontWeight: 700,
              fontSize: "clamp(28px, 5vw, 42px)",
              color: "#ffffff",
              margin: 0,
            }}
          >
            Account Settings
          </h1>
        </div>
      </div>

      <div
        style={{
          maxWidth: "760px",
          margin: "0 auto",
          padding: "32px clamp(20px, 4vw, 48px) 64px",
        }}
      >
        {/* Profile Header */}
        <div
          data-ocid="profile.header_card"
          style={{
            ...cardStyle,
            display: "flex",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <div
            style={{
              width: "72px",
              height: "72px",
              borderRadius: "50%",
              background: "var(--green-primary)",
              color: "#ffffff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "var(--font-display)",
              fontSize: "26px",
              fontWeight: 700,
              flexShrink: 0,
              boxShadow: "0 4px 16px rgba(26,122,76,0.35)",
            }}
          >
            {initials}
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontStyle: "italic",
                fontSize: "22px",
                fontWeight: 600,
                color: "var(--text-primary)",
                margin: "0 0 2px",
              }}
            >
              {profile.fullName}
            </h2>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "13px",
                color: "var(--text-muted)",
                margin: "0 0 8px",
              }}
            >
              {profile.email}
            </p>
            <div
              style={{
                display: "flex",
                gap: "10px",
                flexWrap: "wrap" as const,
              }}
            >
              <span
                style={{
                  background: "var(--green-muted)",
                  color: "var(--green-dark)",
                  border: "1px solid #b3dcc5",
                  borderRadius: "999px",
                  padding: "2px 12px",
                  fontSize: "11px",
                  fontWeight: 700,
                  fontFamily: "var(--font-body)",
                }}
              >
                Member since Jan 2024
              </span>
              <span
                style={{
                  background: "#fff8ec",
                  color: "#b07d1a",
                  border: "1px solid #f4c97c",
                  borderRadius: "999px",
                  padding: "2px 12px",
                  fontSize: "11px",
                  fontWeight: 700,
                  fontFamily: "var(--font-body)",
                }}
              >
                🏔️ 3 Treks Completed
              </span>
            </div>
          </div>
        </div>

        {/* Edit Profile */}
        <div data-ocid="profile.edit_section" style={cardStyle}>
          <SectionTitle>Edit Profile</SectionTitle>
          <form onSubmit={handleProfileSave}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "16px",
                marginBottom: "16px",
              }}
            >
              {(
                [
                  {
                    id: "p-fullname",
                    name: "fullName",
                    label: "Full Name",
                    type: "text",
                    ocid: "profile.fullname_input",
                  },
                  {
                    id: "p-email",
                    name: "email",
                    label: "Email Address",
                    type: "email",
                    ocid: "profile.email_input",
                  },
                  {
                    id: "p-phone",
                    name: "phone",
                    label: "Phone Number",
                    type: "tel",
                    ocid: "profile.phone_input",
                  },
                  {
                    id: "p-city",
                    name: "city",
                    label: "City",
                    type: "text",
                    ocid: "profile.city_input",
                  },
                  {
                    id: "p-state",
                    name: "state",
                    label: "State",
                    type: "text",
                    ocid: "profile.state_input",
                  },
                ] as const
              ).map((f) => (
                <div key={f.id}>
                  <label style={labelStyle} htmlFor={f.id}>
                    {f.label}
                  </label>
                  <input
                    id={f.id}
                    name={f.name}
                    type={f.type}
                    value={profile[f.name as keyof ProfileForm]}
                    onChange={handleProfileChange}
                    style={inputStyle}
                    data-ocid={f.ocid}
                  />
                </div>
              ))}
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <button
                type="submit"
                data-ocid="profile.save_button"
                style={{
                  background: "var(--green-primary)",
                  color: "#ffffff",
                  border: "none",
                  borderRadius: "8px",
                  padding: "0 24px",
                  height: "40px",
                  fontFamily: "var(--font-body)",
                  fontSize: "14px",
                  fontWeight: 600,
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "var(--green-dark)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "var(--green-primary)";
                }}
              >
                Save Changes
              </button>
              {profileSaved && (
                <span
                  data-ocid="profile.save_success_state"
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "13px",
                    color: "var(--success)",
                    fontWeight: 600,
                  }}
                >
                  ✓ Profile updated!
                </span>
              )}
            </div>
          </form>
        </div>

        {/* Change Password */}
        <div data-ocid="profile.password_section" style={cardStyle}>
          <SectionTitle>Change Password</SectionTitle>
          <form onSubmit={handlePasswordSave}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                maxWidth: "400px",
              }}
            >
              {(
                [
                  {
                    id: "p-curr-pw",
                    name: "current",
                    label: "Current Password",
                    placeholder: "Enter current password",
                    ocid: "profile.current_password_input",
                  },
                  {
                    id: "p-new-pw",
                    name: "newPass",
                    label: "New Password",
                    placeholder: "Min. 8 characters",
                    ocid: "profile.new_password_input",
                  },
                  {
                    id: "p-conf-pw",
                    name: "confirm",
                    label: "Confirm New Password",
                    placeholder: "Repeat new password",
                    ocid: "profile.confirm_password_input",
                  },
                ] as const
              ).map((f) => (
                <div key={f.id}>
                  <label style={labelStyle} htmlFor={f.id}>
                    {f.label}
                  </label>
                  <input
                    id={f.id}
                    name={f.name}
                    type="password"
                    value={password[f.name as keyof PasswordForm]}
                    onChange={handlePasswordChange}
                    style={inputStyle}
                    data-ocid={f.ocid}
                    placeholder={f.placeholder}
                  />
                </div>
              ))}
              {passwordError && (
                <p
                  data-ocid="profile.password_error_state"
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "13px",
                    color: "var(--error)",
                    margin: 0,
                  }}
                >
                  {passwordError}
                </p>
              )}
            </div>
            <div
              style={{
                marginTop: "20px",
                display: "flex",
                alignItems: "center",
                gap: "12px",
              }}
            >
              <button
                type="submit"
                data-ocid="profile.change_password_button"
                style={{
                  background: "var(--green-primary)",
                  color: "#ffffff",
                  border: "none",
                  borderRadius: "8px",
                  padding: "0 24px",
                  height: "40px",
                  fontFamily: "var(--font-body)",
                  fontSize: "14px",
                  fontWeight: 600,
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "var(--green-dark)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "var(--green-primary)";
                }}
              >
                Change Password
              </button>
              {passwordSaved && (
                <span
                  data-ocid="profile.password_success_state"
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "13px",
                    color: "var(--success)",
                    fontWeight: 600,
                  }}
                >
                  ✓ Password changed!
                </span>
              )}
            </div>
          </form>
        </div>

        {/* Notification Preferences */}
        <div data-ocid="profile.notifications_section" style={cardStyle}>
          <SectionTitle>Notification Preferences</SectionTitle>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {(
              [
                {
                  key: "emailBookings",
                  label: "Email — Booking Confirmations",
                  desc: "Receive booking confirmations and updates via email.",
                  icon: "📧",
                },
                {
                  key: "emailReminders",
                  label: "Email — Trek Reminders",
                  desc: "Get reminders 7 days and 1 day before your trek.",
                  icon: "🔔",
                },
                {
                  key: "smsNotifications",
                  label: "SMS Notifications",
                  desc: "Important updates sent directly to your phone.",
                  icon: "💬",
                },
                {
                  key: "whatsappNotifications",
                  label: "WhatsApp Notifications",
                  desc: "Receive booking info and reminders on WhatsApp.",
                  icon: "📱",
                },
              ] as const
            ).map(({ key, label, desc, icon }) => (
              <div
                key={key}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "16px",
                  padding: "16px 0",
                  borderBottom: "1px solid var(--border-subtle)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    gap: "12px",
                    alignItems: "flex-start",
                  }}
                >
                  <span style={{ fontSize: "20px", flexShrink: 0 }}>
                    {icon}
                  </span>
                  <div>
                    <p
                      style={{
                        fontFamily: "var(--font-body)",
                        fontWeight: 600,
                        fontSize: "14px",
                        color: "var(--text-primary)",
                        margin: "0 0 2px",
                      }}
                    >
                      {label}
                    </p>
                    <p
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "12px",
                        color: "var(--text-muted)",
                        margin: 0,
                      }}
                    >
                      {desc}
                    </p>
                  </div>
                </div>
                <Switch
                  checked={notifs[key]}
                  onCheckedChange={(val) =>
                    setNotifs((p) => ({ ...p, [key]: val }))
                  }
                  aria-label={label}
                  data-ocid={`profile.notif_${key}_switch`}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Danger Zone */}
        <div
          data-ocid="profile.danger_zone"
          style={{
            background: "#fff5f5",
            border: "1px solid #fca5a5",
            borderRadius: "16px",
            padding: "28px 32px",
          }}
        >
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontStyle: "italic",
              fontSize: "20px",
              fontWeight: 600,
              color: "var(--red)",
              margin: "0 0 8px",
            }}
          >
            Danger Zone
          </h2>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "14px",
              color: "var(--text-secondary)",
              marginBottom: "20px",
            }}
          >
            Permanently delete your account and all associated data. This action
            cannot be undone.
          </p>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <button
                type="button"
                data-ocid="profile.delete_account_button"
                style={{
                  background: "none",
                  color: "var(--red)",
                  border: "2px solid var(--red)",
                  borderRadius: "8px",
                  padding: "0 20px",
                  height: "40px",
                  fontFamily: "var(--font-body)",
                  fontSize: "14px",
                  fontWeight: 600,
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "var(--red)";
                  e.currentTarget.style.color = "#ffffff";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "none";
                  e.currentTarget.style.color = "var(--red)";
                }}
              >
                Delete Account
              </button>
            </AlertDialogTrigger>
            <AlertDialogContent data-ocid="profile.delete_dialog">
              <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This will permanently delete your Global Trek account, booking
                  history, and all personal data. This action cannot be undone.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel data-ocid="profile.delete_cancel_button">
                  Cancel
                </AlertDialogCancel>
                <AlertDialogAction
                  data-ocid="profile.delete_confirm_button"
                  style={{ background: "var(--red)", color: "#ffffff" }}
                >
                  Yes, Delete My Account
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>
    </div>
  );
}
