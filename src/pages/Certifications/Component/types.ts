export interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  date: string; // e.g., "Aug 2025"
  thumbnail: string; // image preview path or data url
  file: string; // public path to the certificate image/pdf
  tags?: string[];
}
