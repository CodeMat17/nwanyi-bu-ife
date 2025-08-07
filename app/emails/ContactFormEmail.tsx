import {
  Html,
  Head,
  Preview,
  Body,
  Container,
  Section,
  Heading,
  Text,
  Hr,
  Link,
  Tailwind,
} from "@react-email/components";

interface ContactFormEmailProps {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactFormEmail({
  name,
  email,
  subject,
  message,
}: ContactFormEmailProps) {
  return (
    <Html>
      <Head>
        <style type='text/css'>
          {`
            a:hover {
              color: #d97706 !important;
            }
            .field-group {
              margin-bottom: 8px;
            }
            .message-label {
              margin-bottom: 2px;
            }
          `}
        </style>
      </Head>
      <Preview>New contact form submission</Preview>
      <Tailwind>
        <Body className='bg-white font-sans'>
          <Container className='mx-auto max-w-2xl p-0'>
            <Section className='bg-amber-600 rounded-t-lg px-8 py-6'>
              <Heading className='text-white text-2xl font-bold m-0 px-4 py-3'>
                Nwanyị bụ ịfe Festival
              </Heading>
            </Section>

            <Section className='bg-gray-50 px-8 py-6'>
              <div className='field-group px-4'>
                <Text className='text-amber-600 text-sm font-bold inline'>
                  Name:{" "}
                </Text>
                <Text className='text-gray-800 text-base inline'>{name}</Text>
              </div>

              <div className='field-group px-4'>
                <Text className='text-amber-600 text-sm font-bold inline'>
                  Email:{" "}
                </Text>
                <Link
                  href={`mailto:${email}`}
                  className='text-base text-amber-600 inline'>
                  {email}
                </Link>
              </div>

              <div className='field-group px-4'>
                <Text className='text-amber-600 text-sm font-bold inline'>
                  Subject:{" "}
                </Text>
                <Text className='text-gray-800 text-base inline'>
                  {subject}
                </Text>
              </div>

              <div className='field-group'>
                <Text className='text-amber-600 text-sm font-bold message-label px-4'>
                  Message:
                </Text>
                <Text className='text-gray-800 text-base whitespace-pre-wrap bg-white p-4 rounded border border-gray-200'>
                  {message}
                </Text>
              </div>
            </Section>

            <Hr className='border-gray-200 my-4' />

            <Section className='px-8 py-3'>
              <Text className='text-gray-500 text-xs'>
                This message was sent from the contact form on your festival
                website.
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
