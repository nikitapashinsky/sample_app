module ApplicationHelper
    include Pagy::Frontend
    # Returns the full title on a per-page basis
    def full_title(page_title = '')
        base_title = "Ruby on Rails Tutorial Sample App"
        if page_title.empty?
            base_title
        else 
            page_title + " | " + base_title
        end
    end

    def error_message_for(field)
        error_message = @user.errors[field][0]
        if error_message
            raw "<span class='form-error'>#{error_message}</span>"
        end
    end
end
