module UsersHelper
    def gravatar_for(user, size: 200)
        gravatar_id = Digest::MD5::hexdigest(user.email.downcase)
        gravatar_url = "https://secure.gravatar.com/avatar/#{gravatar_id}?s=#{size}"
        image_tag(gravatar_url, alt: user.name, class: "gravatar")
    end

    def nav_gravatar_for(current_user, size: 200)
        gravatar_id = Digest::MD5::hexdigest(current_user.email.downcase)
        gravatar_url = "https://secure.gravatar.com/avatar/#{gravatar_id}?s=#{size}"
        image_tag(gravatar_url, alt: current_user.name, class: "nav-gravatar")
    end
end
