
// src/services/firebase.ts
import * as admin from 'firebase-admin';

const serviceAccount = {
    "type": "service_account",
    "project_id": "cut-nexus",
    "private_key_id": "d7790afd4c87169bd7790818af7edd1ceced6043",
    "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC698WO6qKYgv07\nr0cfGoK0Wo98r4tF/rGPFx3M0lnA/lQfFRk0cp8r5u1+JyHz0r6UUin1MjiTDhda\nIGcHBIN2HwwoXfnHv7tseWD1MACXxmUHCB1I9XM9FT3eE4uBxgab5DEMz0j9878m\nFTELuU6n+je8w19DFJG4cphaRASqht9gwrEF3ewJdO2RC0HIWjUoocJri1GEWopD\nmJVw8W70ivq9wm6yiht4uysdawVTzfWr6hpJrma5NVjJ5dDZn1x8En53lLI/+3W9\nVS4vlo4Ne9uwJjvA3MPQmf7v30wyyXDTGsDcHdRkSEE3F5TjHWbMM9+IoQTHe+c+\nTdyhc06JAgMBAAECggEAEaz0bqE0i3YQwjh9IQ3kzu+j0o4W/OBKAYTWMqOtTA9P\nPRwFxL1UWnZru+ovrckd7tBAurdLfW2O3BylmNZ+pidjwxo1T8LK0YO9HJjz6WVe\nbjaAbEIWKa9tKKZQ4U0rGUhOsc8T77xANTW6LAlSDBPd+pi+1AzpBNbCnAADr+pE\nSRTr4Evo5vCiGBT59JhBnoQdFFAIAXqUY/90/5H2hyipzN/3mKBabRmQVWbMIa9h\neTQkWp2HSfPxNvpmS2KIAeCBnCDdt0FAGNjRQ7xrGTAMjZGXA0nhO4ACHJYGIDrc\nTzHyBs3iyCTBh/oRcFTlolHUTurmgxXb4J+dDHqTQQKBgQDtdtIeamp/2hqOuHwF\namKVLhyDKZw/uYGRLWd9F4yce22NVafJZYETgtoDBM4Aieur3k7I3iYtNTLvq3L1\ntIb+LATSM7tDPS+QJBngQrWvOPMMpzDpt2Jg5xlKd4kATeYWFWYUIla1FDOPOMBA\nFAUEysPqPicqSaRk0LykpLhq4QKBgQDJj+XaLCW0UBi5Xb9MVXJnnnk9dpcEQpXg\nfRI4TDb8QwqmVPPBd05scGPEgmI4jR/WEO5ApPWmllsNh3SMlh6E3eZWjeSzDCLJ\nKC/32JVYxx7TqGaqGjdwYGsPSNiWB6iGgWlM4xmfLBHwvJFtxQKMHvtPcsYRkeWk\nWfD3sQzAqQKBgASrppxUiX20Q3t1I3NT0VaPzp3BzsHuGx9I3lU2hlx5jQEPozox\n1eUVWMZgbNDT5Z++wpvuyp9vAW53V85/W3xaT0n3HILJDEtwelXP2hT1MMqZ6ztd\nkQDI6tVtHnO0FIdwqk5REpWDLTRu8FESU7rxZgMQb+LECgi1llBCsSHhAoGAREe7\n7KmR6EBN79WDLV+wzstPdPPMesP3s8GKv4mKAvDPFcOng31gEroMAhDNJy0fgMvh\negKnuNQsaivd3pYoJohpNB8DP2g4DH7RqRs0lIt3tOnSRYN2DlqLSfU6cbCMdWw3\neLViA5rRRQUMGuxnTYJdTe+qi18qNP/G8pGGqWkCgYEAjMv6peOSt2entEViMPbh\nzfIgUbPWa5jREbq05K5MqGVkdlhWWQRFWi0uu4yus5BSUgjt9EiXX/toEHmVuEsx\nS7zTw07JBV9YEfcCLh30+AgyuvcGRItxcSIa2TG0hho2lh58IhpGrpJy6HdwdZaB\ngfVk4Jejy2qyDdK9U5GEdRA=\n-----END PRIVATE KEY-----\n",
    "client_email": "firebase-adminsdk-fbsvc@cut-nexus.iam.gserviceaccount.com",
    "client_id": "103360790271264559079",
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-fbsvc%40cut-nexus.iam.gserviceaccount.com",
    "universe_domain": "googleapis.com"
};

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount as admin.ServiceAccount)
});

export const db = admin.firestore();