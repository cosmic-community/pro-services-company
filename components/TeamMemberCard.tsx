import type { TeamMember } from '@/types'

interface TeamMemberCardProps {
  member: TeamMember
}

export default function TeamMemberCard({ member }: TeamMemberCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow overflow-hidden">
      {member.metadata.photo && (
        <div className="h-64 overflow-hidden">
          <img 
            src={`${member.metadata.photo.imgix_url}?w=600&h=600&fit=crop&auto=format,compress`}
            alt={member.metadata.name}
            width="300"
            height="300"
            className="w-full h-full object-cover"
          />
        </div>
      )}
      
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          {member.metadata.name}
        </h3>
        
        <p className="text-primary-600 font-semibold mb-4">
          {member.metadata.role}
        </p>
        
        {member.metadata.bio && (
          <p className="text-gray-600 mb-4">
            {member.metadata.bio}
          </p>
        )}
        
        <div className="flex items-center space-x-4 pt-4 border-t border-gray-200">
          {member.metadata.email && (
            <a 
              href={`mailto:${member.metadata.email}`}
              className="text-gray-600 hover:text-primary-600 transition-colors"
              aria-label={`Email ${member.metadata.name}`}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            </a>
          )}
          
          {member.metadata.linkedin_url && (
            <a 
              href={member.metadata.linkedin_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary-600 transition-colors"
              aria-label={`${member.metadata.name} on LinkedIn`}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          )}
          
          {member.metadata.twitter_handle && (
            <a 
              href={`https://twitter.com/${member.metadata.twitter_handle.replace('@', '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary-600 transition-colors"
              aria-label={`${member.metadata.name} on Twitter`}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
              </svg>
            </a>
          )}
        </div>
      </div>
    </div>
  )
}